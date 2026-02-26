import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 gradient-section text-primary-foreground">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Contact us!</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto text-sm">
            Ready to take control of your health? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <form className="max-w-lg mx-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Input
              placeholder="Last Name"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
          </div>
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
          />
          <Textarea
            placeholder="Your Message"
            rows={4}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
          />
          <Button className="w-full bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-semibold" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
