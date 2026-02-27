import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    initials: "MR",
    name: "Mike Rodriguez",
    role: "OTR Driver, 18 Years",
    quote:
      "I was about to lose my CDL because of my A1c levels. Junek Therapeutics set me up with a plan I could actually follow from the road — telehealth check-ins, truck stop meal guides, the works. Six months later I passed my DOT physical with flying colors. These folks get the driver lifestyle.",
  },
  {
    initials: "TJ",
    name: "Tamika Johnson",
    role: "Regional Flatbed Driver, 9 Years",
    quote:
      "I'd been pre-diabetic for years and just ignored it. After one video call with their team, I had a meal plan that actually worked with what's available at Pilot and Love's. Down 30 pounds and my blood sugar is steady. Wish I'd started sooner.",
  },
  {
    initials: "DW",
    name: "Dale Whitfield",
    role: "Long-Haul Team Driver, 22 Years",
    quote:
      "My wife found Junek Therapeutics after I failed my DOT physical. They got me on a monitoring plan with a CGM and scheduled calls around my routes. Three months later I was back on the road — certified and feeling better than I have in a decade.",
  },
  {
    initials: "RL",
    name: "Rosa Leal",
    role: "Owner-Operator, 6 Years",
    quote:
      "As an owner-operator, being off the road means losing money. Their telehealth setup means I never miss an appointment. The cab exercises they gave me actually help with the back pain too. Total game changer.",
  },
  {
    initials: "BH",
    name: "Brian Hargrove",
    role: "Tanker Driver, 14 Years",
    quote:
      "I was eating gas station hot dogs every day and my numbers were through the roof. Their nutritionist showed me how to meal prep in a truck with just a microwave and mini fridge. My A1c dropped from 9.2 to 6.8 in four months.",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-14 sm:py-20 bg-background relative overflow-hidden">
      {/* Warm accent blob */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-warm-peach blur-3xl opacity-40" />

      <div className="container px-4 relative">
        <div className="text-center mb-10">
          <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-3">
            Drivers Who Took Control
          </h2>
          <p className="mt-3 text-muted-foreground font-body max-w-xl mx-auto">
            Real stories from real drivers who transformed their health without leaving the road.
          </p>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card p-8 sm:p-10 border border-border text-center">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-teal-light mx-auto flex items-center justify-center mb-4 shadow-lg">
              <span className="text-secondary-foreground font-heading font-extrabold text-2xl">
                {t.initials}
              </span>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-warm-amber fill-warm-amber" />
              ))}
            </div>

            <h3 className="text-lg font-heading font-bold text-foreground">{t.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 font-heading">{t.role}</p>

            <Quote className="w-8 h-8 text-secondary/40 mx-auto mt-6" />
            <blockquote className="mt-3 text-foreground/75 italic leading-relaxed max-w-xl mx-auto text-sm sm:text-base font-body min-h-[120px]">
              "{t.quote}"
            </blockquote>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:bg-muted hover:border-secondary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === current ? "bg-secondary w-6 h-2.5" : "bg-border w-2.5 h-2.5 hover:bg-secondary/50"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:bg-muted hover:border-secondary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
