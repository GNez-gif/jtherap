import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_LINK = "gloria-nezianya-ptdhwn";

const BookingWidget = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#d97706" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="w-full bg-background min-h-[500px]">
      <Cal
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default BookingWidget;
