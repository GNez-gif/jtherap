import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-lg">J</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Junek</span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">Therapeutics</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Dedicated to transforming lives through personalized diabetes management and weight wellness care.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Home", "About", "Services", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-secondary" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" /> info@junektherapeutics.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> 123 Health Street, Wellness City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 Junek Therapeutics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
