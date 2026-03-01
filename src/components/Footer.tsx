import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowUp } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const servicesList = [
  "Navagraha Pooja",
  "Sarpa Dosha Shanti",
  "Kundali Reading",
  "Vedic Marriage Ceremonies",
  "Graha Dosha Remedies",
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />

      <div className="absolute inset-0 opacity-[0.03] hidden sm:block pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] select-none">🕉️</div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="py-12 sm:py-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary flex items-center gap-2">
              🕉️ Priest Seva
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Authentic Vedic rituals performed with scriptural precision and heartfelt devotion. Trusted by 10,000+ families since 1994.
            </p>
            <div className="mt-5 space-y-2.5">
              <a href="tel:8897319822" className="flex items-center gap-2.5 text-sm text-primary-foreground/80 hover:text-secondary transition-colors group">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="font-semibold">88973 19822</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 text-secondary/70 flex-shrink-0" />
                <span>Telangana & Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-primary-foreground/60">
                <Clock className="h-4 w-4 text-secondary/70 flex-shrink-0" />
                <span>We respond within 2 hours</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors w-fit">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-4">Our Services</h4>
            <div className="flex flex-col gap-2.5">
              {servicesList.map((s) => (
                <Link key={s} to="/services" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors w-fit">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-primary-foreground text-sm uppercase tracking-wider mb-4">Book a Puja</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
              Ready for an authentic Vedic experience? Speak with Pandit Ji or book your puja today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary text-secondary-foreground px-5 py-2.5 text-sm font-bold shadow-md hover:bg-secondary/90 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Priest Seva — priestseva.in. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-primary-foreground/30">
              🙏 Serving with devotion since 1994
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary/20 transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5 text-primary-foreground/60" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
