import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
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
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled
        ? "border-b border-border/50 bg-background/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-background/85"
        : "bg-transparent"
    )}>
      <div className="container flex h-18 items-center justify-between py-4">
        <Link to="/" className="font-heading text-2xl font-bold text-primary flex items-center gap-2">
          <span className="text-secondary text-3xl">🕉️</span>
          <span>Priest Seva</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary py-1",
                location.pathname === link.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:rounded-full"
                  : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md">
            <a href="tel:8897319822">
              <Phone className="mr-1.5 h-3.5 w-3.5" /> Call Now
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-2 border-secondary/20">
            <SheetTitle className="font-heading text-2xl text-primary flex items-center gap-2">
              <span className="text-secondary">🕉️</span> Priest Seva
            </SheetTitle>
            <div className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary border-b border-border/30 pb-3",
                    location.pathname === link.href ? "text-primary" : "text-foreground/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-secondary text-secondary-foreground shadow-md" size="lg">
                <a href="tel:8897319822">
                  <Phone className="mr-1.5 h-4 w-4" /> Call Now
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
