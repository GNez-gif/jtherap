import { Activity, Heart, Eye, Zap, Droplets, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  { icon: Activity, title: "Uncontrolled Blood Sugar", desc: "Struggling to keep your blood glucose levels in check?" },
  { icon: Heart, title: "Cardiovascular Risks", desc: "Worried about heart-related complications from diabetes?" },
  { icon: Eye, title: "Vision Changes", desc: "Experiencing blurry vision or eye health concerns?" },
  { icon: Zap, title: "Low Energy Levels", desc: "Feeling fatigued and lacking energy throughout the day?" },
  { icon: Droplets, title: "Kidney Concerns", desc: "Concerned about diabetes impact on kidney function?" },
  { icon: Brain, title: "Neuropathy", desc: "Dealing with numbness, tingling, or nerve pain?" },
  { icon: Shield, title: "Compromised Immunity", desc: "Frequently getting sick or slow wound healing?" },
];

const ChallengesSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase">
            Are You Facing These Health Challenges?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
          If you're experiencing any of these challenges, you're not alone. Our specialized team can help you 
          manage and overcome these health concerns with personalized care plans.
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
