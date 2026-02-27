import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <section id="services" className="py-14 sm:py-20 bg-muted relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container px-4 relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">What We Offer</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-3">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Healthcare designed for drivers, not desk jockeys. Every service fits your schedule, 
            your lifestyle, and your goals — keeping you on the road and in control.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-5 opacity-60" />
        </div>

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-0 items-stretch bg-card rounded-2xl shadow-card overflow-hidden border border-border hover:shadow-card-hover transition-all duration-400 group`}
            >
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-3/5 p-7 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-extrabold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed font-body">{service.desc}</p>
                <Button className="mt-5 w-fit bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold text-sm rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
