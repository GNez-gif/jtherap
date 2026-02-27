import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
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
              { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM - 5PM" },
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
          <form className="md:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
              />
              <Input
                placeholder="Last Name"
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
            />
            <Textarea
              placeholder="Tell us about your situation — routes, schedule, health concerns..."
              rows={4}
              className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl focus:border-secondary"
            />
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" size="lg">
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
