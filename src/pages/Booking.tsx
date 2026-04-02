import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Booking = () => {
  useEffect(() => {
    // IntakeQ widget script
    (window as any).intakeq = "65ad99b0c33ecb26253127f5";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?1";
    document.head.appendChild(script);
    const handleMessage = (e: any) => {
    if (e.data && e.data.event === "intakeq.appointment_booked") {
      window.gtag && window.gtag("event", "consult_booked", {
        event_category: "conversion",
        event_label: "intakeq_booking"
      });
    }
  };

  window.addEventListener("message", handleMessage);

  return () => {
    document.head.removeChild(script);
    window.removeEventListener("message", handleMessage);
    window.gtag && window.gtag("event", "booking_page_view", {
  event_category: "engagement",
  event_label: "booking_page"
});
  };
}, []);

        };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
              Book Your Appointment
            </h1>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Schedule a consultation at a time that works with your route and schedule.
            </p>
          </div>
          {/* IntakeQ widget renders here */}
          <div id="intakeq" className="max-w-3xl mx-auto" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
