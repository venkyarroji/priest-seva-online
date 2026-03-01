import { Award, BookOpen, Home, Users } from "lucide-react";
import priestPortrait from "@/assets/priest-portrait.jpg";
import certificate from "@/assets/certificate.png";

const highlights = [
  { icon: Award, label: "30+ Years Experience", desc: "Mastery in Vedic scriptures since 1994" },
  { icon: Users, label: "10,000+ Devotees Served", desc: "Trusted across Telangana & Andhra Pradesh" },
  { icon: Home, label: "Home Puja Services", desc: "Sacred rituals performed at your doorstep" },
  { icon: BookOpen, label: "Authentic Vedic Traditions", desc: "Every mantra recited with scriptural precision" },
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 pattern-overlay relative">
      <div className="container px-4">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">About the Priest</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">
            Pandit Yerroju Srinivasa Charyulu Garu
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Image column */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="aspect-[3/4] max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-secondary/20">
                <img
                  src={priestPortrait}
                  alt="Pandit Yerroju Srinivasa Charyulu Garu — Certified Vedic Priest"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-secondary rounded-tl-lg" />
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-secondary rounded-br-lg" />
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-border max-w-md mx-auto lg:max-w-none">
              <img
                src={certificate}
                alt="Official Vedic priesthood certification and recognition"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-6 sm:space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With over <strong className="text-foreground">three decades of unwavering devotion</strong> to Vedic traditions,
                Pandit Yerroju Srinivasa Charyulu Garu is among the most respected and sought-after priests in Telangana
                and Andhra Pradesh. Trained under eminent Vedic scholars, his mastery spans the Rigveda, Yajurveda,
                and the complete canon of Hindu ritual practices.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                From Navagraha Pooja and Sarpa Dosha Shanti to elaborate marriage ceremonies and Griha Pravesh,
                every ritual is performed with <strong className="text-foreground">scriptural accuracy, heartfelt devotion,
                and transparent communication</strong>. Each step is explained to the family with patience, ensuring
                a meaningful and spiritually enriching experience.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Having guided over <strong className="text-foreground">10,000 families</strong> through life's most sacred moments,
                his reputation stands on authentic practice, genuine care, and a lifetime dedicated to spiritual service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-card p-4 sm:p-5 transition-all duration-300 hover:border-secondary/50 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-secondary/10 flex-shrink-0">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-foreground">{label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-12 sm:pl-[52px]">{desc}</p>
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
