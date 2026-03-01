import { DollarSign, Heart, Activity, Users, ShieldAlert } from "lucide-react";

const problems = [
  { icon: DollarSign, label: "Financial Problems" },
  { icon: Heart, label: "Marriage Delay" },
  { icon: Activity, label: "Health Issues" },
  { icon: Users, label: "Family Disputes" },
  { icon: ShieldAlert, label: "Negative Energies" },
];

const Problems = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Spiritual Guidance
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Problems We Help Solve
          </h2>
          <p className="mt-4 text-primary-foreground/70">
            Through authentic Vedic rituals and mantras, we provide remedies for life's challenges.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center transition-colors hover:border-secondary/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15">
                <Icon className="h-7 w-7 text-secondary" />
              </div>
              <p className="text-sm font-semibold text-primary-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
