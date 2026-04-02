import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { captureUtmParams } from "@/lib/utm";

const Booking = () => {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const utm = captureUtmParams();
    (window as any).gtag && (window as any).gtag("event", "booking_page_view", {
      event_category: "engagement",
      event_label: "booking_page",
      ...utm,
    });

    (window as any).intakeq = "65ad99b0c33ecb26253127f5";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?1";
    document.head.appendChild(script);

    const handleMessage = (e: any) => {
      if (e.data && e.data.event === "intakeq.appointment_booked") {
        setBooked(true);
        (window as any).gtag && (window as any).gtag("event", "consult_booked", {
          event_category: "conversion",
          event_label: "intakeq_booking",
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container px-4">
          {booked ? (
            <div className="text-center py-20 max-w-2xl mx-auto animate-fade-in">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                You're All Set!
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your appointment has been booked successfully. You'll receive a confirmation email shortly with all the details.
              </p>
              <p className="mt-6 text-muted-foreground">
                If you need to reschedule or have any questions, feel free to reach out at{" "}
                <a href="tel:+13125449897" className="text-primary hover:underline font-medium">
                  +1 (312) 544-9897
                </a>{" "}
                or{" "}
                <a href="mailto:info@junektherapeutics.com" className="text-primary hover:underline font-medium">
                  info@junektherapeutics.com
                </a>
              </p>
              <button
                onClick={() => setBooked(false)}
                className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                  Book Your Appointment
                </h1>
                <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                  Schedule a consultation at a time that works with your route and schedule.
                </p>
              </div>
              <div id="intakeq" className="max-w-3xl mx-auto" />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
