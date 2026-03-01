import { Button } from "@/components/ui/button";
import { Phone, Star, ChevronDown } from "lucide-react";
import pujaCeremony1 from "@/assets/puja-ceremony-1.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={pujaCeremony1}
        alt="Vedic puja ceremony with traditional mandala and offerings"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        loading="eager"
      />
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/75 to-maroon-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div className="container relative z-10 text-center px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Om with glow effect */}
          <div className="relative inline-block">
            <p className="text-6xl md:text-7xl drop-shadow-lg">🕉️</p>
          </div>

          <h1 className="font-heading text-5xl font-black tracking-tight text-cream md:text-7xl lg:text-8xl drop-shadow-lg">
            Priest Seva
          </h1>

          <div className="section-divider !w-24" />

          <p className="text-lg font-light text-cream/90 md:text-xl lg:text-2xl tracking-wide">
            30+ Years of Trusted Vedic Experience
          </p>

          <p className="font-heading text-xl gold-text font-semibold md:text-2xl">
            Yerroju Srinivasa Charyulu Garu
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-secondary/40 bg-secondary/15 px-6 py-2.5 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-semibold text-cream tracking-wide">
              10,000+ Happy Devotees
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-10 py-6 text-base shadow-lg shadow-secondary/25 transition-all hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <a href="#contact">Book Puja Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-cream/30 text-cream hover:bg-cream/10 px-10 py-6 text-base backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <a href="tel:8897319822">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-cream/50" />
      </div>
    </section>
  );
};

export default Hero;
