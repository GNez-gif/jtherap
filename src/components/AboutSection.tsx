import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import consultationImg from "@/assets/services-consultation.jpg";
import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container px-4 relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">
            About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-3">
            Healthcare Built for Life on the Road
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-card group">
            <img
              src={consultationImg}
              alt="Driver health consultation"
              className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="mb-5">
              <img src={logo} alt="Junek Therapeutics" className="h-16 drop-shadow-md" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              Long hours behind the wheel, irregular meals, and limited access to healthcare make truck drivers 
              and road warriors especially vulnerable to Type 2 Diabetes. At Junek Therapeutics, we specialize 
              in care plans built around your schedule — not the other way around.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              Whether you're hauling cross-country or running regional routes, our telehealth-first approach 
              means expert diabetes management and weight wellness support rides with you.
            </p>
            <Button className="mt-7 bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold rounded-full px-7 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
