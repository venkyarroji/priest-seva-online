import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-500",
      scrolled
        ? "border-b border-secondary/20 bg-background/98 backdrop-blur-xl shadow-lg shadow-primary/5"
        : "bg-background/80 backdrop-blur-sm"
    )}>
      {/* Top gold accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container flex h-16 sm:h-18 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">🕉️</span>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold text-primary leading-tight tracking-wide">
              Priest Seva
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold leading-tight">
              Vedic Rituals & Guidance
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                location.pathname === link.href
                  ? "text-secondary bg-secondary/8"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-secondary rounded-full" />
              )}
            </Link>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <Button asChild size="sm" className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/70 shadow-md shadow-secondary/20 font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5">
            <a href="tel:8897319822">
              <Phone className="mr-1.5 h-3.5 w-3.5" /> Call Now
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-secondary/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-2 border-secondary/20 w-[300px]">
            <SheetTitle className="font-heading text-xl text-primary flex items-center gap-2.5 pb-2 border-b border-border">
              <span className="text-2xl">🕉️</span>
              <div>
                <span className="block">Priest Seva</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-secondary font-semibold block">Vedic Rituals & Guidance</span>
              </div>
            </SheetTitle>
            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium transition-all rounded-xl px-4 py-3",
                    location.pathname === link.href
                      ? "text-secondary bg-secondary/10 border-l-4 border-secondary"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-3" />
              <Button asChild className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground shadow-md font-bold rounded-xl" size="lg">
                <a href="tel:8897319822">
                  <Phone className="mr-1.5 h-4 w-4" /> Call Now — 88973 19822
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
