import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative warm circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-warm-amber/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-secondary/30">
            <Heart className="w-4 h-4 text-secondary" fill="currentColor" />
            <span className="text-primary-foreground/90 text-sm font-heading font-semibold">
              Trusted by 500+ Drivers Nationwide
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-[1.15] text-shadow-hero">
            Health on the Road,{" "}
            <span className="text-teal-light">Wellness</span> Behind the Wheel
          </h1>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-primary-foreground/90 font-body leading-relaxed text-shadow-hero">
            Diabetes Management & Weight Wellness for Truck Drivers
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-foreground/75 font-body italic text-shadow-hero">
            Personalized care designed for drivers who never stop moving
          </p>
          <p className="mt-3 text-xs sm:text-sm text-primary-foreground/70 font-heading font-bold tracking-wide text-shadow-hero">
            Serving the States of Wyoming, Utah, Illinois, New Mexico, Arizona, Texas, Florida…and growing
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold px-8 sm:px-10 w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-heading font-semibold px-8 w-full sm:w-auto rounded-full backdrop-blur-sm transition-all duration-300"
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
