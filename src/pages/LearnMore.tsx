import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Phone, Utensils, Scale, FileCheck, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import BookingDialog from "@/components/BookingDialog";

const highlights = [
  {
    icon: Stethoscope,
    title: "Driver Health Assessment",
    description:
      "A full evaluation covering blood sugar, blood pressure, BMI, and DOT readiness — designed around the demands of long-haul driving.",
  },
  {
    icon: Phone,
    title: "Telehealth Follow-ups",
    description:
      "Video and phone appointments scheduled around your route. Get expert care from your cab, rest stop, or anywhere with signal.",
  },
  {
    icon: Activity,
    title: "HbA1c & Diabetes Monitoring",
    description:
      "Continuous tracking and management to keep your HbA1c in the safe zone — critical for maintaining your CDL medical certification.",
  },
  {
    icon: Utensils,
    title: "Road-Ready Nutrition",
    description:
      "Practical meal plans built for truck stops and limited kitchens. No fancy ingredients — just smart, filling choices available on the road.",
  },
  {
    icon: Scale,
    title: "Weight Wellness Programs",
    description:
      "Exercise routines you can do at rest areas and in your cab. Sustainable weight management that doesn't require a gym membership.",
  },
  {
    icon: FileCheck,
    title: "DOT Physical Preparation",
    description:
      "We ensure your diabetes is well-documented and controlled, providing the medical records examiners need to clear you confidently.",
  },
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="container px-4 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-primary-foreground/70 text-sm font-heading font-semibold hover:text-primary-foreground transition-colors mb-6"
            >
              ← Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground leading-tight">
              Healthcare Built for <span className="text-teal-light">Drivers</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-primary-foreground/85 font-body max-w-2xl leading-relaxed">
              Diabetes management and weight wellness designed for the trucking lifestyle — not the office worker. Every service fits your schedule, your routes, and your goals.
            </p>
          </div>
        </section>

        {/* Why Drivers Need Specialized Care */}
        <section className="py-14 sm:py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">
                Why It Matters
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mt-3">
                The Road Takes a Toll on Your Health
              </h2>
              <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
              <p className="mt-6 text-muted-foreground font-body leading-relaxed">
                Long hours behind the wheel, limited food options, irregular sleep, and minimal exercise — the trucking lifestyle creates unique health challenges. Truck drivers are{" "}
                <strong className="text-foreground">twice as likely</strong> to develop Type 2 Diabetes compared to the general population. Standard healthcare doesn't account for life on the road. We do.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              {[
                { stat: "69%", label: "of truckers are obese vs. 31% national average" },
                { stat: "2x", label: "higher diabetes risk for long-haul drivers" },
                { stat: "14yr", label: "shorter life expectancy than the general public" },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="bg-card rounded-2xl p-6 border border-border shadow-warm"
                >
                  <p className="text-3xl sm:text-4xl font-heading font-extrabold text-secondary">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground font-body">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-14 sm:py-20 bg-muted">
          <div className="container px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">
                What We Offer
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mt-3">
                Our Services in Detail
              </h2>
              <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-7 border border-border shadow-warm hover:shadow-card-hover transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading font-extrabold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-14 sm:py-20 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">
                Getting Started
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground mt-3">
                How It Works
              </h2>
              <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
            </div>

            <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: "1",
                  title: "Book a Consultation",
                  desc: "Schedule a free initial assessment — by phone or video, whenever suits your route.",
                },
                {
                  step: "2",
                  title: "Get Your Plan",
                  desc: "Receive a personalized health plan built around your driving schedule and goals.",
                },
                {
                  step: "3",
                  title: "Stay on Track",
                  desc: "Regular telehealth check-ins and monitoring keep you healthy and DOT-certified.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto font-heading font-extrabold text-lg">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-20 bg-primary relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 blur-3xl" />
          <div className="container px-4 relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary-foreground">
              Ready to Take Control of Your Health?
            </h2>
            <p className="mt-4 text-primary-foreground/80 font-body max-w-xl mx-auto">
              Don't wait for your next DOT physical to find out there's a problem. Start managing your health today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <BookingDialog>
                <Button
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </BookingDialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;
