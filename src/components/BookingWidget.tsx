import { useEffect } from "react";

const BookingWidget = () => {
  useEffect(() => {
    // Adding the widget script on mount
    // @ts-expect-error - intakeq is injected by the widget
    window.intakeq = "65ad99b0c33ecb26253127f5";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://intakeq.com/js/widget.min.js?" + new Date().getTime();
    document.body.appendChild(script);

    return () => {
      // Clean up the script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // @ts-expect-error - intakeqs is injected by the widget
      delete window.intakeqs;
    };
  }, []);

  return (
    <div className="w-full bg-background min-h-[500px] flex items-center justify-center">
      <div id="intakeq" style={{ maxWidth: "720px", width: "100%", margin: "0 auto" }} />
    </div>
  );
};

export default BookingWidget;
