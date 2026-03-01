import { DollarSign, Heart, Activity, Users, ShieldAlert, ArrowRight } from "lucide-react";
import problemFinancial from "@/assets/problem-financial.png";
import problemMarriage from "@/assets/problem-marriage.png";
import problemHealth from "@/assets/problem-health.png";
import problemFamily from "@/assets/problem-family.png";
import problemNegative from "@/assets/problem-negative.png";

const problems = [
  { icon: DollarSign, label: "Financial Problems", desc: "Overcome financial obstacles through powerful Vedic remedies and Lakshmi pujas for prosperity.", image: problemFinancial },
  { icon: Heart, label: "Marriage Delay", desc: "Astrological solutions and sacred rituals to remove obstacles in finding your life partner.", image: problemMarriage },
  { icon: Activity, label: "Health Issues", desc: "Spiritual healing through ancient mantras and rituals for chronic health concerns.", image: problemHealth },
  { icon: Users, label: "Family Disputes", desc: "Restore harmony, peace, and love in your household through sacred Vedic practices.", image: problemFamily },
  { icon: ShieldAlert, label: "Negative Energies", desc: "Powerful protection rituals against evil eye, black magic, and negative influences.", image: problemNegative },
];

const Problems = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 text-[200px] font-heading select-none">🕉️</div>
        <div className="absolute bottom-10 right-10 text-[150px] font-heading select-none rotate-12">☸</div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Spiritual Guidance
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
            Problems We Help Solve
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 text-primary-foreground/70 text-base max-w-lg mx-auto">
            Through authentic Vedic rituals, mantras, and personalized guidance, we provide time-tested remedies for life's challenges.
          </p>
        </div>

        {/* Featured top row — 2 large cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          {problems.slice(0, 2).map(({ icon: Icon, label, desc, image }) => (
            <div
              key={label}
              className="group relative rounded-2xl overflow-hidden border border-primary-foreground/10 transition-all duration-500 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/10"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-primary-foreground">{label}</h3>
                    <p className="mt-1.5 text-sm text-primary-foreground/70 leading-relaxed">{desc}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
                >
                  Get Remedy <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — 3 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.slice(2).map(({ icon: Icon, label, desc, image }) => (
            <div
              key={label}
              className="group relative rounded-2xl overflow-hidden border border-primary-foreground/10 transition-all duration-500 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/20 backdrop-blur-sm border border-secondary/30">
                    <Icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-primary-foreground">{label}</h3>
                    <p className="mt-1 text-xs text-primary-foreground/65 leading-relaxed">{desc}</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-secondary transition-colors hover:text-secondary/80"
                >
                  Get Remedy <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
