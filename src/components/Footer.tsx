import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary py-12 text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-secondary">🙏 Priest Seva</h3>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              Authentic Vedic rituals with 30+ years of trusted experience.
              Serving devotees with devotion and precision.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">About</Link>
              <Link to="/services" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Services</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-3">Contact</h4>
            <div className="space-y-2">
              <a href="tel:8897319822" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" /> 88973 19822
              </a>
              <a href="tel:9676956436" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone className="h-4 w-4" /> 96769 56436
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Priest Seva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
