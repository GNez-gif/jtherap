import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type LogRow = {
  id: string;
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
};

type ApiResponse = {
  rows: LogRow[];
  stats: {
    total: number;
    sent: number;
    pending: number;
    failed: number;
    suppressed: number;
  };
  templates: string[];
};

const RANGE_OPTIONS = [
  { value: "24h", label: "Last 24 hours", hours: 24 },
  { value: "7d", label: "Last 7 days", hours: 24 * 7 },
  { value: "30d", label: "Last 30 days", hours: 24 * 30 },
  { value: "all", label: "All time", hours: 24 * 365 * 5 },
];

const STATUS_BADGE: Record<string, string> = {
  sent: "bg-emerald-100 text-emerald-800 border-emerald-200",
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  dlq: "bg-rose-100 text-rose-800 border-rose-200",
  failed: "bg-rose-100 text-rose-800 border-rose-200",
  suppressed: "bg-zinc-200 text-zinc-700 border-zinc-300",
  bounced: "bg-rose-100 text-rose-800 border-rose-200",
  complained: "bg-rose-100 text-rose-800 border-rose-200",
};

const AdminEmails = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [range, setRange] = useState("7d");
  const [templateFilter, setTemplateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    document.title = "Email Dashboard | Admin";
    // Auth listener first, then check session
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin/login", { replace: true });
    });
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/admin/login", { replace: true });
      } else {
        setAuthChecked(true);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const opt = RANGE_OPTIONS.find((r) => r.value === range)!;
      const startDate = new Date(Date.now() - opt.hours * 3600 * 1000).toISOString();

      const { data: res, error } = await supabase.functions.invoke<ApiResponse>(
        "admin-email-logs",
        {
          body: {
            startDate,
            templateName: templateFilter,
            status: statusFilter,
            limit: 200,
          },
        }
      );
      if (error) throw error;
      setData(res!);
    } catch (err: any) {
      toast({
        title: "Failed to load logs",
        description: err.message ?? "Check that your account has admin access.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authChecked) fetchLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authChecked, range, templateFilter, statusFilter]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  const stats = data?.stats ?? { total: 0, sent: 0, pending: 0, failed: 0, suppressed: 0 };
  const templates = useMemo(() => data?.templates ?? [], [data]);

  if (!authChecked) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-heading font-bold">Email Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Delivery status for all transactional emails
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchLogs} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </div>
        </header>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase mb-1 block">
                Time range
              </label>
              <Select value={range} onValueChange={setRange}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {RANGE_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase mb-1 block">
                Template
              </label>
              <Select value={templateFilter} onValueChange={setTemplateFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All templates</SelectItem>
                  {templates.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase mb-1 block">
                Status
              </label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="dlq">Failed (DLQ)</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="suppressed">Suppressed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { label: "Total", value: stats.total },
            { label: "Sent", value: stats.sent },
            { label: "Pending", value: stats.pending },
            { label: "Failed", value: stats.failed },
            { label: "Suppressed", value: stats.suppressed },
          ].map((s) => (
            <Card key={s.label}>
              <CardHeader className="pb-2">
                <CardTitle className="text-xs font-semibold text-muted-foreground uppercase">
                  {s.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-heading font-bold">{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent emails</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="py-12 flex justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
              </div>
            ) : !data || data.rows.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground text-sm">
                No emails match your filters.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-xs uppercase text-muted-foreground">
                      <th className="py-2 pr-4">Time</th>
                      <th className="py-2 pr-4">Template</th>
                      <th className="py-2 pr-4">Recipient</th>
                      <th className="py-2 pr-4">Status</th>
                      <th className="py-2">Error</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((r) => (
                      <tr key={r.id} className="border-b last:border-0 align-top">
                        <td className="py-2 pr-4 whitespace-nowrap text-muted-foreground">
                          {new Date(r.created_at).toLocaleString()}
                        </td>
                        <td className="py-2 pr-4 font-mono text-xs">{r.template_name}</td>
                        <td className="py-2 pr-4">{r.recipient_email}</td>
                        <td className="py-2 pr-4">
                          <Badge
                            variant="outline"
                            className={STATUS_BADGE[r.status] ?? ""}
                          >
                            {r.status}
                          </Badge>
                        </td>
                        <td className="py-2 text-xs text-rose-700 max-w-xs">
                          {r.error_message ?? ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AdminEmails;
