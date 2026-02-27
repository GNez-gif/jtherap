import { Button } from "@/components/ui/button";
import consultationImg from "@/assets/services-consultation.jpg";
import monitoringImg from "@/assets/services-monitoring.jpg";
import nutritionImg from "@/assets/services-nutrition.jpg";
import weightImg from "@/assets/services-weight.jpg";

const services = [
  {
    title: "Driver Health Assessment",
    desc: "Comprehensive evaluation tailored to the trucking lifestyle — covering blood sugar, blood pressure, BMI, and DOT readiness so you stay certified and healthy.",
    image: consultationImg,
  },
  {
    title: "Telehealth Follow-ups",
    desc: "Video and phone appointments that work around your route schedule. Get expert care from your cab, rest stop, or anywhere you have signal.",
    image: monitoringImg,
  },
  {
    title: "HbA1c & Diabetes Monitoring",
    desc: "Ongoing tracking and management to keep your HbA1c in the safe zone — critical for maintaining your CDL medical certification.",
    image: nutritionImg,
  },
  {
    title: "Road-Ready Nutrition & Weight Loss",
    desc: "Practical meal plans built for truck stops and limited kitchens. No gym required — exercise routines you can do at rest areas and in your cab.",
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
            Healthcare designed for drivers, not desk jockeys. Every service fits your schedule, 
            your lifestyle, and your goals — keeping you on the road and in control.
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
