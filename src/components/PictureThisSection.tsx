import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Stable blood sugar — even with truck stop meals and irregular schedules",
  "Sustained energy for long hauls without the afternoon crash",
  "A healthy weight that helps you pass your DOT physical with confidence",
  "Reduced risk of losing your CDL due to diabetes complications",
  "A road-ready plan that fits your routes, not the other way around",
];

const PictureThisSection = () => {
  return (
    <section className="py-10 sm:py-16 gradient-section text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold italic">
            Picture this!
          </h2>
          <p className="mt-6 text-primary-foreground/85 leading-relaxed">
            Imagine rolling out for your next haul feeling sharp, energized, and in control of your health. 
            No more worrying about your next DOT physical or crashing mid-route. 
            With our trucker-focused care, this can be your new normal.
          </p>

          <div className="mt-8 space-y-4 text-left max-w-lg mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-primary-foreground/90 text-sm">{benefit}</p>
              </div>
            ))}
          </div>

          <Button className="mt-8 bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-semibold px-8" size="lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PictureThisSection;
