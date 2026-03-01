import { Award, BookOpen, Home, Users } from "lucide-react";

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
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-lg bg-muted flex items-center justify-center border-2 border-border overflow-hidden">
              <div className="text-center p-8 space-y-4">
                <p className="text-6xl">🙏</p>
                <p className="font-heading text-xl text-primary font-semibold">Priest Photo</p>
                <p className="text-sm text-muted-foreground">Upload your image to replace this placeholder</p>
              </div>
            </div>
            {/* Decorative border */}
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
