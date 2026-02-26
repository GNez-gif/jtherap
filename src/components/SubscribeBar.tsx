import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SubscribeBar = () => {
  return (
    <section className="bg-secondary py-8">
      <div className="container text-center">
        <h2 className="text-2xl font-heading font-bold text-secondary-foreground">
          Subscribe & Be Updated
        </h2>
        <p className="mt-2 text-secondary-foreground/80 text-sm max-w-xl mx-auto">
          Stay informed about the latest in diabetes management, weight wellness tips, and health news.
        </p>
        <form className="mt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="bg-primary-foreground text-foreground border-0"
          />
          <Button className="bg-primary text-primary-foreground hover:bg-navy-light font-heading font-semibold px-6">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeBar;
