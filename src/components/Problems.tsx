import { DollarSign, Heart, Activity, Users, ShieldAlert } from "lucide-react";

const problems = [
  { icon: DollarSign, label: "Financial Problems", desc: "Overcome financial obstacles with Vedic remedies" },
  { icon: Heart, label: "Marriage Delay", desc: "Astrological solutions for delayed marriages" },
  { icon: Activity, label: "Health Issues", desc: "Spiritual healing for chronic health concerns" },
  { icon: Users, label: "Family Disputes", desc: "Restore harmony in your household" },
  { icon: ShieldAlert, label: "Negative Energies", desc: "Protection from evil eye and bad influences" },
];

const Problems = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-[200px] font-heading text-cream select-none">🕉️</div>
        <div className="absolute bottom-10 right-10 text-[150px] font-heading text-cream select-none rotate-12">☸</div>
      </div>

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center transition-all duration-300 hover:border-secondary/50 hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 transition-all group-hover:bg-secondary/25 group-hover:scale-110">
                <Icon className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <p className="text-base font-bold text-primary-foreground">{label}</p>
                <p className="mt-1.5 text-xs text-primary-foreground/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
