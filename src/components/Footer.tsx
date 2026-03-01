import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Decorative top line */}
      <div className="h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] select-none">🕉️</div>
      </div>

      <div className="container relative z-10 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-secondary flex items-center gap-2">
              🕉️ Priest Seva
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-md">
              Authentic Vedic rituals with 30+ years of trusted experience.
              Serving devotees with devotion, precision, and personalized spiritual guidance
              for all of life's sacred moments.
            </p>
            <div className="mt-6 flex items-center gap-2 text-primary-foreground/50 text-xs">
              <MapPin className="h-3.5 w-3.5" />
              <span>Available across Telangana & Andhra Pradesh</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors hover:translate-x-1 inline-flex"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <a href="tel:8897319822" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-secondary transition-colors group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                88973 19822
              </a>
              <a href="tel:9676956436" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-secondary transition-colors group">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/10 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                96769 56436
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Priest Seva. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            🙏 Serving with devotion since 1994
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
