import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) {
      toast({ title: "Email is required", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "new-signup-notification",
          idempotencyKey: `contact-notify-${id}`,
          templateData: {
            source: "contact",
            ...form,
            submittedAt: new Date().toISOString(),
          },
        },
      });
      if (error) throw error;
      toast({ title: "Message sent!", description: "We'll be in touch soon." });
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 gradient-section text-primary-foreground relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-warm-amber/5 blur-3xl" />

      <div className="container px-4 relative">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold">Get in Touch, Driver</h2>
          <p className="mt-3 text-primary-foreground/75 max-w-xl mx-auto font-body">
            Ready to take the wheel on your health? Drop us a message and we'll reach out — on your schedule, not ours.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Quick contact cards */}
          <div className="md:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Call Us", value: "+1 (312) 544-9897" },
              { icon: Mail, label: "Email", value: "info@junektherapeutics.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-primary-foreground/8 rounded-2xl p-4 border border-primary-foreground/10">
                <div className="w-10 h-10 rounded-xl bg-secondary/80 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-xs font-heading font-semibold uppercase tracking-wider">{item.label}</p>
                  <p className="text-primary-foreground text-sm font-heading font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
              />
              <Input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
              />
            </div>
            <Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
            />
            <Input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
            />
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your situation — routes, schedule, health concerns..."
              rows={4}
              className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              size="lg"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send className="w-4 h-4 ml-2" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
