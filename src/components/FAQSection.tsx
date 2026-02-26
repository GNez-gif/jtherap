import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Type 2 Diabetes Mellitus?",
    a: "Type 2 Diabetes Mellitus is a chronic condition where your body doesn't use insulin properly, leading to elevated blood sugar levels. It can be managed through lifestyle changes, medication, and regular monitoring.",
  },
  {
    q: "How often should I monitor my blood sugar?",
    a: "The frequency depends on your treatment plan. Generally, we recommend monitoring at least once daily, but your healthcare provider will create a personalized monitoring schedule based on your needs.",
  },
  {
    q: "Can Type 2 Diabetes be reversed?",
    a: "While Type 2 Diabetes is a chronic condition, significant lifestyle changes including weight loss, healthy eating, and regular exercise can lead to remission in some cases, especially when caught early.",
  },
  {
    q: "What services do you offer for weight management?",
    a: "We offer comprehensive weight management programs including nutritional counseling, personalized meal planning, exercise guidance, and ongoing support to help you achieve and maintain a healthy weight.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with many insurance providers. Please contact our office to verify your coverage and discuss payment options available to you.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border rounded-lg px-4 bg-card"
              >
                <AccordionTrigger className="text-sm font-heading font-semibold text-foreground hover:text-secondary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
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
