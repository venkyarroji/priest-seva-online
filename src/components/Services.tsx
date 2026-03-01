import { Sun, Shield, BookOpen, Heart, Baby, Star, Sparkles } from "lucide-react";

const services = [
  { icon: Sun, title: "Navagraha Pooja", description: "Appease the nine planetary deities for prosperity and well-being in your life." },
  { icon: Shield, title: "Sarpa Dosha Shanti", description: "Remedial rituals to nullify the effects of Sarpa Dosha in your horoscope." },
  { icon: BookOpen, title: "Kundali Reading", description: "Detailed horoscope analysis and personalized spiritual guidance for your future." },
  { icon: Heart, title: "Marriage Pujas", description: "Complete Vedic marriage ceremonies performed with traditional sacred rituals." },
  { icon: Baby, title: "Santan Pujas", description: "Sacred rituals for blessings of progeny and child well-being and happiness." },
  { icon: Star, title: "Graha Dosha Remedies", description: "Effective remedies for planetary doshas and negative influences in your life." },
  { icon: Sparkles, title: "All Types of Pujas", description: "Griha Pravesh, Satyanarayan Katha, and all traditional Vedic ceremonies." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card relative">
      {/* Subtle top border decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Our Services</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Sacred Vedic Rituals
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 text-muted-foreground text-base max-w-lg mx-auto">
            Authentic pujas and spiritual services performed with decades of experience, devotion, and scriptural precision.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`group relative rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-secondary hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1 ${
                index === services.length - 1 && services.length % 2 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
