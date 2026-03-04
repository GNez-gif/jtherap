import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, phone, message } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const MAILCHIMP_API_KEY = Deno.env.get('MAILCHIMP_API_KEY');
    const MAILCHIMP_AUDIENCE_ID = Deno.env.get('MAILCHIMP_AUDIENCE_ID');

    if (!MAILCHIMP_API_KEY) {
      throw new Error('MAILCHIMP_API_KEY is not configured');
    }
    if (!MAILCHIMP_AUDIENCE_ID) {
      throw new Error('MAILCHIMP_AUDIENCE_ID is not configured');
    }

    // Extract data center from API key (e.g., "us21")
    const dc = MAILCHIMP_API_KEY.split('-').pop();
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`anystring:${MAILCHIMP_API_KEY}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName || '',
          LNAME: lastName || '',
          PHONE: phone || '',
          MMERGE6: message || '',
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // If already subscribed, treat as success
      if (data.title === 'Member Exists') {
        return new Response(JSON.stringify({ success: true, message: 'Already subscribed' }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`Mailchimp API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
