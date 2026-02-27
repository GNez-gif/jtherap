import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Stable blood sugar — even with truck stop meals and irregular schedules",
  "Sustained energy for long hauls without the afternoon crash",
  "A healthy weight that helps you pass your DOT physical with confidence",
  "Reduced risk of losing your CDL due to diabetes complications",
  "A road-ready plan that fits your routes, not the other way around",
];

const PictureThisSection = () => {
  return (
    <section className="py-14 sm:py-20 gradient-section text-primary-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-warm-amber/5 blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 mb-6 border border-primary-foreground/15">
            <Sparkles className="w-4 h-4 text-warm-amber" />
            <span className="text-primary-foreground/85 text-sm font-heading font-semibold">Your New Reality</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold">
            Picture this!
          </h2>
          <p className="mt-6 text-primary-foreground/80 leading-relaxed font-body text-base max-w-xl mx-auto">
            Imagine rolling out for your next haul feeling sharp, energized, and in control of your health. 
            No more worrying about your next DOT physical or crashing mid-route. 
            With our trucker-focused care, this can be your new normal.
          </p>

          <div className="mt-10 space-y-4 text-left max-w-lg mx-auto">
            {benefits.map((benefit, idx) => (
              <div 
                key={benefit} 
                className="flex items-start gap-3 bg-primary-foreground/5 rounded-xl p-3.5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 text-teal-light shrink-0 mt-0.5" />
                <p className="text-primary-foreground/90 text-sm font-body leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <Button className="mt-10 bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" size="lg">
            Start Your Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PictureThisSection;
