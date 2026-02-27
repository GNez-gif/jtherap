import { Activity, Heart, Eye, Zap, Droplets, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  { icon: Activity, title: "Blood Sugar Spikes on the Road", desc: "Fast food and gas station meals making it impossible to keep glucose stable?" },
  { icon: Heart, title: "Cardiovascular Strain", desc: "Long sedentary hours increasing your risk for heart problems?" },
  { icon: Eye, title: "Vision Changes", desc: "Blurry vision threatening your CDL medical certification?" },
  { icon: Zap, title: "Driver Fatigue", desc: "Crashing energy levels making long hauls dangerous?" },
  { icon: Droplets, title: "DOT Physical Concerns", desc: "Worried about passing your next DOT medical exam?" },
  { icon: Brain, title: "Neuropathy & Numbness", desc: "Tingling in your hands and feet affecting your grip and pedal control?" },
  { icon: Shield, title: "Slow Recovery", desc: "Cuts and injuries healing slowly while you're miles from home?" },
];

const ChallengesSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-secondary/8 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-warm-amber/5 blur-3xl" />

      <div className="container px-4 relative">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold">
            Sound Familiar, Driver?
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {challenges.map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-primary-foreground/8 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-primary-foreground/14 transition-all duration-300 hover:-translate-y-1 border border-primary-foreground/10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/90 flex items-center justify-center shrink-0 shadow-md">
                <item.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm">{item.title}</h3>
                <p className="text-primary-foreground/65 text-sm mt-1.5 font-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-primary-foreground/75 max-w-2xl mx-auto font-body italic leading-relaxed">
          The trucking lifestyle doesn't have to wreck your health. Our team understands life on the road 
          and builds care plans that work from the cab, not just the clinic.
        </p>

        <div className="text-center mt-8">
          <Button className="bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
