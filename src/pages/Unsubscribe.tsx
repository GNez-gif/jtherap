import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, XCircle, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State =
  | { kind: "validating" }
  | { kind: "ready" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ kind: "validating" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON } }
        );
        const data = await res.json();
        if (!res.ok) {
          setState({ kind: "invalid" });
          return;
        }
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setState({ kind: "already" });
          return;
        }
        setState({ kind: "ready" });
      } catch {
        setState({ kind: "error", message: "Could not validate your link. Please try again." });
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if ((data as any)?.success) {
        setState({ kind: "success" });
      } else if ((data as any)?.reason === "already_unsubscribed") {
        setState({ kind: "already" });
      } else {
        setState({ kind: "error", message: "Something went wrong. Please try again." });
      }
    } catch (e: any) {
      setState({ kind: "error", message: e?.message ?? "Unexpected error." });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 max-w-xl mx-auto">
          <div className="bg-card border border-border rounded-3xl shadow-sm p-8 sm:p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-5">
              <Mail className="w-7 h-7 text-secondary-foreground" />
            </div>

            {state.kind === "validating" && (
              <>
                <h1 className="text-2xl font-heading font-bold text-foreground">Checking your link...</h1>
                <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mt-6" />
              </>
            )}

            {state.kind === "ready" && (
              <>
                <h1 className="text-2xl font-heading font-bold text-foreground">Unsubscribe from emails</h1>
                <p className="mt-3 text-muted-foreground font-body">
                  Click below to stop receiving emails from Junek Therapeutics.
                </p>
                <Button
                  onClick={handleConfirm}
                  size="lg"
                  className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold"
                >
                  Confirm Unsubscribe
                </Button>
              </>
            )}

            {state.kind === "submitting" && (
              <>
                <h1 className="text-2xl font-heading font-bold text-foreground">Processing...</h1>
                <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mt-6" />
              </>
            )}

            {state.kind === "success" && (
              <>
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                <h1 className="text-2xl font-heading font-bold text-foreground">You're unsubscribed</h1>
                <p className="mt-3 text-muted-foreground font-body">
                  You won't receive further emails. You can re-subscribe anytime from our website.
                </p>
              </>
            )}

            {state.kind === "already" && (
              <>
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                <h1 className="text-2xl font-heading font-bold text-foreground">Already unsubscribed</h1>
                <p className="mt-3 text-muted-foreground font-body">
                  This email address has already been unsubscribed.
                </p>
              </>
            )}

            {state.kind === "invalid" && (
              <>
                <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
                <h1 className="text-2xl font-heading font-bold text-foreground">Invalid or expired link</h1>
                <p className="mt-3 text-muted-foreground font-body">
                  This unsubscribe link is no longer valid. Please contact us at info@junektherapeutics.com if you need help.
                </p>
              </>
            )}

            {state.kind === "error" && (
              <>
                <XCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
                <h1 className="text-2xl font-heading font-bold text-foreground">Something went wrong</h1>
                <p className="mt-3 text-muted-foreground font-body">{state.message}</p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
