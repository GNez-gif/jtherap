import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 container py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight text-shadow-hero">
            Health on the Road, Wellness Behind the Wheel
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-primary-foreground/90 font-body text-shadow-hero">
            Diabetes Management & Weight Wellness for Truck Drivers
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/80 text-shadow-hero">
            Personalized care designed for drivers who never stop moving
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-semibold px-6 sm:px-8 w-full sm:w-auto"
            >
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-heading font-semibold px-6 sm:px-8 w-full sm:w-auto"
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
