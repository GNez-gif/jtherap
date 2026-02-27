import { Button } from "@/components/ui/button";
import consultationImg from "@/assets/services-consultation.jpg";
import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-heading font-semibold text-secondary uppercase tracking-wider">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Healthcare Built for Life on the Road
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={consultationImg}
              alt="Driver health consultation"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div>
            <div className="mb-4">
              <img src={logo} alt="Junek Therapeutics" className="h-12" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Long hours behind the wheel, irregular meals, and limited access to healthcare make truck drivers 
              and road warriors especially vulnerable to Type 2 Diabetes. At Junek Therapeutics, we specialize 
              in care plans built around your schedule — not the other way around.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're hauling cross-country or running regional routes, our telehealth-first approach 
              means expert diabetes management and weight wellness support rides with you.
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
