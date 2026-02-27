import { Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 sm:py-14 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container px-4 relative">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-5">
              <img src={logo} alt="Junek Therapeutics" className="h-14 brightness-0 invert drop-shadow-lg" />
            </div>
            <p className="text-primary-foreground/65 text-sm font-body leading-relaxed">
              Keeping America's drivers healthy, certified, and on the road with personalized diabetes and weight wellness care.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-extrabold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-primary-foreground/65 hover:text-secondary transition-colors duration-200 font-heading font-semibold flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-extrabold mb-5 text-lg">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-heading">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-heading">info@junektherapeutics.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-heading">123 Health Street, Wellness City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-10 pt-7 text-center text-sm text-primary-foreground/45 font-heading">
          <p className="flex items-center justify-center gap-1.5">
            © 2026 Junek Therapeutics. Made with <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" /> for drivers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
