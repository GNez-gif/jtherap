import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "FAQ", "Contact"];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +1 (555) 123-4567
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Mail className="w-3 h-3" /> info@junektherapeutics.com
            </span>
          </div>
          <span className="hidden md:block">Mon - Fri: 9:00 AM - 5:00 PM</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container flex justify-between items-center py-3">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Junek Therapeutics" className="h-14 drop-shadow-md" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
              >
                {link}
              </a>
            ))}
            <Button className="bg-secondary text-secondary-foreground hover:bg-teal-dark text-sm">
              Book Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-medium text-foreground hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <Button className="mt-2 w-full bg-secondary text-secondary-foreground hover:bg-teal-dark">
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
