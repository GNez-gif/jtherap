import { Button } from "@/components/ui/button";
import consultationImg from "@/assets/services-consultation.jpg";
import monitoringImg from "@/assets/services-monitoring.jpg";
import nutritionImg from "@/assets/services-nutrition.jpg";
import weightImg from "@/assets/services-weight.jpg";

const services = [
  {
    title: "Initial Consultation",
    desc: "Comprehensive health assessment to understand your unique needs, medical history, and goals for diabetes management.",
    image: consultationImg,
  },
  {
    title: "Follow-up Care",
    desc: "Regular monitoring appointments to track your progress, adjust treatment plans, and ensure optimal health outcomes.",
    image: monitoringImg,
  },
  {
    title: "Monitor HbA1c Type 2 Diabetes Management",
    desc: "Specialized monitoring and management programs designed to keep your HbA1c levels within target range.",
    image: nutritionImg,
  },
  {
    title: "Weight Loss and Nutritional Healthy Lifestyle",
    desc: "Personalized nutrition counseling and weight management programs to support your overall wellness journey.",
    image: weightImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to help you manage Type 2 Diabetes 
            and achieve your weight wellness goals through evidence-based approaches.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-center bg-card rounded-xl shadow-md overflow-hidden border border-border`}
            >
              <div className="md:w-2/5 h-56 md:h-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-heading font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading text-sm">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
