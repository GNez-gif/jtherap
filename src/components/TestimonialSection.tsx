import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6">
            <span className="text-secondary-foreground font-heading font-bold text-2xl">GN</span>
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground">Gloria Nkurunziza</h3>
          <p className="text-sm text-muted-foreground mt-1">Patient</p>
          <Quote className="w-8 h-8 text-secondary mx-auto mt-6" />
          <blockquote className="mt-4 text-foreground/80 italic leading-relaxed max-w-xl mx-auto">
            "Working with Junek Therapeutics has completely transformed my approach to managing diabetes. 
            The personalized care and attention I received helped me achieve my health goals faster than 
            I ever thought possible. I'm grateful for their dedication and expertise."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
