import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Stable blood sugar levels that stay within your target range",
  "More energy to enjoy your daily activities and hobbies",
  "A healthy weight that makes you feel confident",
  "Reduced risk of diabetes-related complications",
  "A personalized plan that fits your lifestyle",
];

const PictureThisSection = () => {
  return (
    <section className="py-16 gradient-section text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold italic">
            Picture this!
          </h2>
          <p className="mt-6 text-primary-foreground/85 leading-relaxed">
            Imagine waking up every morning feeling energized, knowing your health is on the right track. 
            With our comprehensive approach to diabetes management and weight wellness, 
            this can be your reality.
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
