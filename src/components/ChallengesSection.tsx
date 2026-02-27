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
    <section className="py-10 sm:py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold uppercase">
            Sound Familiar, Driver?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-5 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-primary-foreground/80 max-w-2xl mx-auto text-sm">
          The trucking lifestyle doesn't have to wreck your health. Our team understands life on the road 
          and builds care plans that work from the cab, not just the clinic.
        </p>

        <div className="text-center mt-6">
          <Button className="bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-semibold px-8">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
