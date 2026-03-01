import { Award, BookOpen, Home, Users, CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">About</p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Yerroju Srinivasa Charyulu Garu
          </h1>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              With over 30 years of dedicated experience in performing authentic Vedic rituals,
              Yerroju Srinivasa Charyulu Garu is one of the most respected priests in the region.
              His journey in spiritual service began at a young age, studying under renowned Vedic
              scholars and mastering ancient scriptures, mantras, and ritual practices.
            </p>
            <p>
              Having served more than 10,000 devotees across the region, he brings unmatched
              expertise in conducting Navagraha Pooja, Sarpa Dosha Shanti, Kundali Reading,
              marriage ceremonies, and a wide range of Vedic rituals. Every ceremony is performed
              with complete adherence to Vedic traditions and with utmost devotion.
            </p>
            <p>
              He is known for his patient approach, explaining the significance of each ritual
              to the family, ensuring that devotees understand the spiritual meaning behind
              every step. He provides personalized guidance based on individual horoscopes
              and spiritual needs.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Award, text: "30+ Years of Vedic Experience" },
              { icon: Users, text: "10,000+ Satisfied Devotees" },
              { icon: Home, text: "Home Visit Services Available" },
              { icon: BookOpen, text: "Expert in All Vedic Rituals" },
              { icon: CheckCircle, text: "Personalized Spiritual Guidance" },
              { icon: CheckCircle, text: "Transparent and Authentic Practices" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Icon className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
