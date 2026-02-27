import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = ["Home", "About", "Services", "FAQ", "Contact"];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm py-2">
        <div className="container flex justify-between items-center px-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-teal-light" /> +1 (312) 544-9897
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-teal-light" /> info@junektherapeutics.com
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/98 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-warm">
        <div className="container flex justify-between items-center py-3 sm:py-4 px-4">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Junek Therapeutics" className="h-10 sm:h-14 drop-shadow-md" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-heading font-semibold text-foreground/80 hover:text-secondary transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            ))}
            <Button onClick={() => navigate("/booking")} className="bg-secondary text-secondary-foreground hover:bg-teal-dark text-sm font-heading font-bold rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Book Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-1 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-5 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 text-sm font-heading font-semibold text-foreground hover:text-secondary border-b border-border/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button onClick={() => navigate("/booking")} className="mt-4 w-full bg-secondary text-secondary-foreground hover:bg-teal-dark font-heading font-bold rounded-full">
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
