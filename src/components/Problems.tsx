import { DollarSign, Heart, Activity, Users, ShieldAlert, ArrowRight } from "lucide-react";
import problemFinancial from "@/assets/problem-financial.png";
import problemMarriage from "@/assets/problem-marriage.png";
import problemHealth from "@/assets/problem-health.png";
import problemFamily from "@/assets/problem-family.png";
import problemNegative from "@/assets/problem-negative.png";

const problems = [
  { icon: DollarSign, label: "Financial Obstacles", desc: "Overcome monetary challenges through powerful Lakshmi Pujas, Kubera Homas, and time-tested Vedic remedies for lasting prosperity.", image: problemFinancial },
  { icon: Heart, label: "Delayed Marriage", desc: "Remove astrological obstacles to marriage through sacred rituals, Mangal Dosha remedies, and personalised planetary solutions.", image: problemMarriage },
  { icon: Activity, label: "Health & Well-being", desc: "Restore vitality through Mrityunjaya Japa, Ayush Homam, and ancient mantras for chronic health concerns and mental peace.", image: problemHealth },
  { icon: Users, label: "Family Discord", desc: "Rekindle harmony and understanding in your household through Shanti Pujas, Vastu corrections, and spiritual counselling.", image: problemFamily },
  { icon: ShieldAlert, label: "Negative Energies & Drishti", desc: "Powerful Sudarshana Homam, Nazar Dosh Nivaran, and protection rituals against evil eye and negative influences.", image: problemNegative },
];

const ProblemCard = ({ icon: Icon, label, desc, image, large = false }: {
  icon: typeof DollarSign;
  label: string;
  desc: string;
  image: string;
  large?: boolean;
}) => (
  <div className="group relative rounded-2xl overflow-hidden border border-primary-foreground/10 transition-all duration-500 hover:border-secondary/40 hover:shadow-2xl hover:shadow-secondary/10">
    <div className={`relative overflow-hidden ${large ? "h-48 sm:h-56" : "h-44 sm:h-48"}`}>
      <img
        src={image}
        alt={`Vedic remedy for ${label}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
      <div className="flex items-start gap-3">
        <div className={`flex flex-shrink-0 items-center justify-center rounded-lg bg-secondary/20 backdrop-blur-sm border border-secondary/30 ${large ? "h-10 w-10 sm:h-12 sm:w-12" : "h-9 w-9 sm:h-10 sm:w-10"}`}>
          <Icon className={`text-secondary ${large ? "h-5 w-5 sm:h-6 sm:w-6" : "h-4 w-4 sm:h-5 sm:w-5"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-heading font-bold text-primary-foreground ${large ? "text-base sm:text-xl" : "text-sm sm:text-lg"}`}>{label}</h3>
          <p className={`mt-1 text-primary-foreground/70 leading-relaxed line-clamp-2 ${large ? "text-xs sm:text-sm" : "text-xs"}`}>{desc}</p>
        </div>
      </div>
      <a
        href="#contact"
        className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
      >
        Consult Now <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);

const Problems = () => {
  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] hidden sm:block">
        <div className="absolute top-10 left-10 text-[200px] font-heading select-none">🕉️</div>
        <div className="absolute bottom-10 right-10 text-[150px] font-heading select-none rotate-12">☸</div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Spiritual Solutions
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-primary-foreground sm:text-3xl md:text-5xl">
            Life Challenges We Address
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 sm:mt-6 text-primary-foreground/70 text-sm sm:text-base max-w-lg mx-auto">
            Through authentic Vedic rituals, sacred mantras, and personalised astrological guidance, we provide proven remedies for life's deepest challenges.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 mb-4 sm:mb-6">
          {problems.slice(0, 2).map((p) => (
            <ProblemCard key={p.label} {...p} large />
          ))}
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {problems.slice(2).map((p) => (
            <ProblemCard key={p.label} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
