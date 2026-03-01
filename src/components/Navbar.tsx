import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-heading text-2xl font-bold text-primary">
          🙏 Priest Seva
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="tel:8897319822">
              <Phone className="mr-1 h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="font-heading text-primary">Priest Seva</SheetTitle>
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location.pathname === link.href ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-secondary text-secondary-foreground">
                <a href="tel:8897319822">
                  <Phone className="mr-1 h-4 w-4" /> Call Now
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
