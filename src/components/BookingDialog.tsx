import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import BookingWidget from "./BookingWidget";

interface BookingDialogProps {
  children: ReactNode;
}

const BookingDialog = ({ children }: BookingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] w-[95vw] p-0 border-none bg-background overflow-y-auto max-h-[90vh]">
        <DialogTitle className="sr-only">Book an Appointment</DialogTitle>
        <BookingWidget />
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
