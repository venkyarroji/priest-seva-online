import { Button } from "@/components/ui/button";
import { Phone, Star } from "lucide-react";
import pujaCeremony1 from "@/assets/puja-ceremony-1.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-maroon-dark">
      {/* Background image */}
      <img
        src={pujaCeremony1}
        alt="Vedic puja ceremony with traditional mandala and offerings"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-maroon-dark/95" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-5xl">🕉️</p>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-primary-foreground md:text-7xl">
            Priest Seva
          </h1>

          <p className="text-xl font-light text-primary-foreground/90 md:text-2xl">
            30+ Years of Trusted Vedic Experience
          </p>

          <p className="font-heading text-lg text-secondary md:text-xl">
            Yerroju Srinivasa Charyulu Garu
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              10,000+ Happy Devotees
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 text-base"
            >
              <a href="#contact">Book Puja Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base"
            >
              <a href="tel:8897319822">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
