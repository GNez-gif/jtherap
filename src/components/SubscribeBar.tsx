import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "@/lib/turnstile";

const SubscribeBar = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Please enter your email", variant: "destructive" });
      return;
    }
    if (!turnstileToken) {
      toast({ title: "Please complete the verification", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "new-signup-notification",
          idempotencyKey: `signup-notify-${id}`,
          turnstileToken,
          templateData: {
            source: "subscribe",
            email,
            submittedAt: new Date().toISOString(),
          },
        },
      });
      if (error) throw error;
      toast({ title: "You're subscribed! 🎉", description: "We'll be in touch with health tips soon." });
      setEmail("");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-secondary py-8 sm:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/20 to-transparent" />
      <div className="container text-center px-4 relative">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-secondary-foreground">
          Stay Road-Ready 🚛
        </h2>
        <p className="mt-2 text-secondary-foreground/80 text-sm max-w-xl mx-auto font-body">
          Get driver-friendly health tips, truck stop meal guides, and diabetes management updates straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-primary-foreground text-foreground border-0 rounded-full pl-10 shadow-md"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-navy-light font-heading font-bold px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <div className="mt-4 flex justify-center">
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
            options={{ theme: "light", size: "flexible" }}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeBar;
