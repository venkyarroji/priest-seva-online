import { Sun, Shield, BookOpen, Heart, Baby, Star, Sparkles } from "lucide-react";
import serviceNavagraha from "@/assets/service-navagraha.png";
import serviceSarpa from "@/assets/service-sarpa.png";
import serviceKundali from "@/assets/service-kundali.png";
import serviceMarriage from "@/assets/service-marriage.png";
import serviceSantan from "@/assets/service-santan.png";
import serviceGraha from "@/assets/service-graha.png";
import serviceAllpuja from "@/assets/service-allpuja.png";

const services = [
  { icon: Sun, title: "Navagraha Pooja", description: "Invoke the blessings of the nine celestial deities to bring harmony, success, and protection into your life.", image: serviceNavagraha },
  { icon: Shield, title: "Sarpa Dosha Shanti", description: "Authentic Vedic remedies to neutralise Sarpa Dosha effects and restore peace and prosperity to your family.", image: serviceSarpa },
  { icon: BookOpen, title: "Kundali Reading & Analysis", description: "Comprehensive horoscope analysis with personalised spiritual guidance for career, marriage, and well-being.", image: serviceKundali },
  { icon: Heart, title: "Vedic Marriage Ceremonies", description: "Complete traditional wedding rituals — from Ganesh Puja to Saptapadi — performed with sacred precision.", image: serviceMarriage },
  { icon: Baby, title: "Santan Puja & Child Blessings", description: "Sacred rituals for the blessing of progeny, safe delivery, and lifelong well-being of your children.", image: serviceSantan },
  { icon: Star, title: "Graha Dosha Remedies", description: "Targeted planetary remedies including Shanti Pujas and Homas to mitigate adverse astrological influences.", image: serviceGraha },
  { icon: Sparkles, title: "All Traditional Vedic Pujas", description: "Griha Pravesh, Satyanarayan Katha, Vastu Shanti, Rudrabhishekam, and every sacred ceremony your family needs.", image: serviceAllpuja },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Our Sacred Services</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">
            Authentic Vedic Rituals
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 sm:mt-6 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Every puja is performed with scriptural precision, heartfelt devotion, and transparent guidance — backed by 30+ years of trusted practice.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:border-secondary hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1"
            >
              <div className="relative h-40 sm:h-44 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} — Vedic ritual performed by Priest Seva`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute top-3 left-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm border border-border">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-2">
                <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">{title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
