import { Award, BookOpen, Home, Users } from "lucide-react";
import priestPortrait from "@/assets/priest-portrait.jpg";
import certificate from "@/assets/certificate.png";

const highlights = [
  { icon: Award, label: "30+ Years Experience", desc: "Decades of dedicated Vedic practice" },
  { icon: Users, label: "10,000+ Devotees", desc: "Trusted by thousands of families" },
  { icon: Home, label: "Home Puja Services", desc: "Rituals at your doorstep" },
  { icon: BookOpen, label: "Authentic Rituals", desc: "True to Vedic traditions" },
];

const About = () => {
  return (
    <section id="about" className="py-24 pattern-overlay relative">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">About the Priest</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Yerroju Srinivasa Charyulu Garu
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Image column */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-secondary/20">
                <img
                  src={priestPortrait}
                  alt="Yerroju Srinivasa Charyulu Garu - Vedic Priest with 30+ years experience"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-secondary rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-secondary rounded-br-lg" />
            </div>

            {/* Certificate */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <img
                src={certificate}
                alt="Vedic priest certification and recognition"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base">
                With over <strong className="text-foreground">30 years of dedicated experience</strong> in performing authentic Vedic rituals,
                Yerroju Srinivasa Charyulu Garu has served more than 10,000 devotees with utmost
                devotion and precision. His deep knowledge of Vedic scriptures, mantras, and
                traditional rituals ensures that every puja is performed with the highest sanctity.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Whether it's Navagraha Pooja, marriage ceremonies, or resolving doshas,
                he provides <strong className="text-foreground">personalized spiritual guidance</strong> and home puja services across the region.
                Every ritual is explained to the family with patience and devotion.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-secondary/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-sm font-bold text-foreground">{label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-[52px]">{desc}</p>
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
