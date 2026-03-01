import { Button } from "@/components/ui/button";
import { Phone, Star, ChevronDown } from "lucide-react";
import pujaCeremony1 from "@/assets/puja-ceremony-1.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={pujaCeremony1}
        alt="Vedic puja ceremony with traditional mandala and offerings"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/75 to-primary/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div className="container relative z-10 text-center px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
          {/* Om */}
          <div className="relative inline-block">
            <p className="text-5xl sm:text-6xl md:text-7xl drop-shadow-lg" aria-hidden="true">🕉️</p>
          </div>

          <h1 className="font-heading text-4xl font-black tracking-tight text-cream sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Priest Seva
          </h1>

          <div className="section-divider !w-20 sm:!w-24" />

          <p className="text-base font-light text-cream/90 sm:text-lg md:text-xl lg:text-2xl tracking-wide">
            30+ Years of Trusted Vedic Experience
          </p>

          <p className="font-heading text-lg gold-text font-semibold sm:text-xl md:text-2xl">
            Yerroju Srinivasa Charyulu Garu
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-4 py-2 sm:px-6 sm:py-2.5 backdrop-blur-sm">
            <Star className="h-4 w-4 fill-secondary text-secondary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-cream tracking-wide">
              10,000+ Happy Devotees
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-4 sm:pt-6">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 py-5 sm:px-10 sm:py-6 text-sm sm:text-base shadow-lg shadow-secondary/25 transition-all hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <a href="#contact">Book Puja Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-cream/30 text-cream hover:bg-cream/10 px-8 py-5 sm:px-10 sm:py-6 text-sm sm:text-base backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <a href="tel:8897319822">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <ChevronDown className="h-6 w-6 text-cream/50" />
      </div>
    </section>
  );
};

export default Hero;
