import { Button } from "@/components/ui/button";
import consultationImg from "@/assets/services-consultation.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Your Type 2 Diabetes Care for Better Wellness
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={consultationImg}
              alt="Medical consultation"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-xl">J</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-foreground">Junek</span>
                <span className="block text-xs text-muted-foreground -mt-1">Therapeutics</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Type 2 Diabetes Mellitus is a chronic metabolic condition that affects how your body processes blood sugar (glucose). 
              At Junek Therapeutics, we specialize in comprehensive diabetes management and weight wellness programs 
              tailored to your unique needs.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of experienced healthcare professionals is dedicated to helping you achieve optimal health 
              through personalized treatment plans, nutrition guidance, and ongoing support.
            </p>
            <Button className="mt-6 bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-semibold">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
