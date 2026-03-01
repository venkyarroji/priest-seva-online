import { Award, BookOpen, Home, Users } from "lucide-react";
import priestPortrait from "@/assets/priest-portrait.jpg";
import certificate from "@/assets/certificate.png";

const highlights = [
  { icon: Award, label: "30+ Years Experience" },
  { icon: Users, label: "10,000+ Devotees Served" },
  { icon: Home, label: "Home Puja Services" },
  { icon: BookOpen, label: "Authentic Vedic Rituals" },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Priest image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-border">
              <img
                src={priestPortrait}
                alt="Yerroju Srinivasa Charyulu Garu - Vedic Priest with 30+ years experience"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border-2 border-secondary/30 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">About the Priest</p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Yerroju Srinivasa Charyulu Garu
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              With over 30 years of dedicated experience in performing authentic Vedic rituals,
              Yerroju Srinivasa Charyulu Garu has served more than 10,000 devotees with utmost
              devotion and precision. His deep knowledge of Vedic scriptures, mantras, and
              traditional rituals ensures that every puja is performed with the highest sanctity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's Navagraha Pooja, marriage ceremonies, or resolving doshas,
              he provides personalized spiritual guidance and home puja services across the region.
            </p>

            {/* Certificate */}
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={certificate}
                alt="Vedic priest certification and recognition"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
                  <Icon className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
