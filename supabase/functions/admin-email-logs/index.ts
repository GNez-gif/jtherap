// Admin-only email logs API.
// Auth: requires a valid JWT AND the caller must have the 'admin' role.
import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!

  // Validate caller's JWT
  const authHeader = req.headers.get('Authorization')
  if (!authHeader) {
    return json({ error: 'Unauthorized' }, 401)
  }

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  })
  const { data: userData, error: userErr } = await userClient.auth.getUser()
  if (userErr || !userData.user) {
    return json({ error: 'Unauthorized' }, 401)
  }
  const userId = userData.user.id

  // Check admin role using service role (bypasses RLS, uses our security definer function)
  const admin = createClient(supabaseUrl, serviceKey)
  const { data: isAdmin, error: roleErr } = await admin.rpc('has_role', {
    _user_id: userId,
    _role: 'admin',
  })
  if (roleErr || !isAdmin) {
    return json({ error: 'Forbidden — admin role required' }, 403)
  }

  let body: any = {}
  try {
    body = await req.json()
  } catch {
    body = {}
  }

  const startDate: string | undefined = body.startDate
  const endDate: string | undefined = body.endDate
  const templateName: string | undefined = body.templateName
  const status: string | undefined = body.status
  const limit = Math.min(Number(body.limit ?? 100), 500)

  // Fetch a generous window of rows then deduplicate by message_id (latest per id)
  let query = admin
    .from('email_send_log')
    .select('id, message_id, template_name, recipient_email, status, error_message, created_at')
    .order('created_at', { ascending: false })
    .limit(2000)

  if (startDate) query = query.gte('created_at', startDate)
  if (endDate) query = query.lte('created_at', endDate)

  const { data: rows, error: queryErr } = await query
  if (queryErr) {
    console.error('Query failed', queryErr)
    return json({ error: 'Query failed', details: queryErr.message }, 500)
  }

  // Deduplicate: keep latest row per message_id (rows already DESC by created_at)
  const seen = new Set<string>()
  const dedup: any[] = []
  for (const r of rows ?? []) {
    const key = r.message_id ?? r.id
    if (seen.has(key)) continue
    seen.add(key)
    dedup.push(r)
  }

  // Apply post-dedup filters
  let filtered = dedup
  if (templateName && templateName !== 'all') {
    filtered = filtered.filter((r) => r.template_name === templateName)
  }
  if (status && status !== 'all') {
    filtered = filtered.filter((r) => r.status === status)
  }

  const stats = {
    total: filtered.length,
    sent: filtered.filter((r) => r.status === 'sent').length,
    pending: filtered.filter((r) => r.status === 'pending').length,
    failed: filtered.filter((r) => r.status === 'dlq' || r.status === 'failed').length,
    suppressed: filtered.filter((r) => r.status === 'suppressed').length,
  }

  // Distinct templates from full (non-status-filtered) dedup set for the dropdown
  const templates = Array.from(new Set(dedup.map((r) => r.template_name))).sort()

  return json({
    rows: filtered.slice(0, limit),
    stats,
    templates,
  })
})

function json(body: any, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}
