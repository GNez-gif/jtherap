import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const SubscribeBar = () => {
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
        <form className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-primary-foreground text-foreground border-0 rounded-full pl-10 shadow-md"
            />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-navy-light font-heading font-bold px-7 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeBar;
