import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-10 sm:py-16 bg-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6">
            <span className="text-secondary-foreground font-heading font-bold text-2xl">MR</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground">Mike Rodriguez</h3>
          <p className="text-sm text-muted-foreground mt-1">OTR Driver, 18 Years</p>
          <Quote className="w-8 h-8 text-secondary mx-auto mt-6" />
          <blockquote className="mt-4 text-foreground/80 italic leading-relaxed max-w-xl mx-auto">
            "I was about to lose my CDL because of my A1c levels. Junek Therapeutics set me up with a plan 
            I could actually follow from the road — telehealth check-ins, truck stop meal guides, the works. 
            Six months later I passed my DOT physical with flying colors. These folks get the driver lifestyle."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
