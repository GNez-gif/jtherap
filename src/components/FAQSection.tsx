import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Can I manage Type 2 Diabetes and keep my CDL?",
    a: "Absolutely. With proper management and documentation, most drivers with Type 2 Diabetes can maintain their CDL. We help you stay within FMCSA guidelines and prepare for DOT physicals.",
  },
  {
    q: "How do telehealth appointments work on the road?",
    a: "We schedule around your routes. All you need is a phone or tablet with signal. Video or phone — your choice. We can even work around time zone changes.",
  },
  {
    q: "What can I eat healthy at truck stops?",
    a: "More than you'd think. We provide practical meal guides for major truck stop chains, plus simple recipes you can make with a microwave, mini-fridge, or slow cooker in your cab.",
  },
  {
    q: "How often do I need to check my blood sugar?",
    a: "It depends on your treatment plan. We'll set up a monitoring schedule that's realistic for life behind the wheel — including continuous glucose monitors that reduce finger sticks.",
  },
  {
    q: "Do you help with DOT physical preparation?",
    a: "Yes. We ensure your diabetes is well-documented and controlled, and we provide the medical records examiners need to clear you confidently.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 sm:py-20 bg-muted relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-teal/5 blur-3xl" />

      <div className="container px-4 relative">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-heading font-bold text-secondary uppercase tracking-widest">FAQ</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-foreground mt-3">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 opacity-60" />
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border rounded-2xl px-5 bg-card shadow-warm hover:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-sm font-heading font-bold text-foreground hover:text-secondary py-5 gap-3">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-secondary shrink-0" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
