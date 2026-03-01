import { Sun, Shield, BookOpen, Heart, Baby, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: Sun, title: "Navagraha Pooja", description: "Appease the nine planetary deities for prosperity and well-being." },
  { icon: Shield, title: "Sarpa Dosha Shanti", description: "Remedial rituals to nullify the effects of Sarpa Dosha in your horoscope." },
  { icon: BookOpen, title: "Kundali Reading", description: "Detailed horoscope analysis and personalized spiritual guidance." },
  { icon: Heart, title: "Marriage Pujas", description: "Complete Vedic marriage ceremonies performed with traditional rituals." },
  { icon: Baby, title: "Santan Pujas", description: "Sacred rituals for blessings of progeny and child well-being." },
  { icon: Star, title: "Graha Dosha Remedies", description: "Effective remedies for planetary doshas affecting your life." },
  { icon: Sparkles, title: "All Types of Pujas", description: "Griha Pravesh, Satyanarayan Katha, and all traditional ceremonies." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Our Services</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Sacred Vedic Rituals
          </h2>
          <p className="mt-4 text-muted-foreground">
            Authentic pujas and spiritual services performed with decades of experience and devotion.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group border-border bg-background transition-all duration-300 hover:border-secondary hover:shadow-lg"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
