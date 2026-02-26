import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight text-shadow-hero">
            Transforming Lives, Managing Your Health
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 font-body text-shadow-hero">
            Type 2 Diabetes Control and Weight Wellness
          </p>
          <p className="mt-2 text-primary-foreground/80 text-shadow-hero">
            Dedicated to empowering you with personalized care
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-semibold px-8"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
