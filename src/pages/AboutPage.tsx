import { Award, BookOpen, Home, Users, CheckCircle, Shield } from "lucide-react";
import priestPortrait from "@/assets/priest-portrait.jpg";
import certificate from "@/assets/certificate.png";

const AboutPage = () => {
  return (
    <main className="py-16 sm:py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">About</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Pandit Yerroju Srinivasa Charyulu Garu
          </h1>
          <div className="section-divider mt-4 !mx-0" />

          <div className="mt-10 grid gap-10 lg:grid-cols-5">
            {/* Images */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-secondary/20">
                <img src={priestPortrait} alt="Pandit Yerroju Srinivasa Charyulu Garu" className="w-full object-cover" loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img src={certificate} alt="Vedic priesthood certification" className="w-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-5 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  With over <strong className="text-foreground">three decades of dedicated experience</strong> in performing authentic Vedic rituals,
                  Pandit Yerroju Srinivasa Charyulu Garu is one of the most respected and sought-after priests in Telangana
                  and Andhra Pradesh. His spiritual journey began at a young age, studying under renowned Vedic
                  scholars and mastering ancient scriptures, mantras, and the complete canon of Hindu ritual practices.
                </p>
                <p>
                  Having served more than <strong className="text-foreground">10,000 devotees</strong> across the region, he brings unmatched
                  expertise in conducting Navagraha Pooja, Sarpa Dosha Shanti, Kundali Reading,
                  marriage ceremonies, and the full spectrum of Vedic rituals. Every ceremony is performed
                  with absolute adherence to Vedic traditions and utmost devotion.
                </p>
                <p>
                  He is known for his patient, compassionate approach — explaining the significance of each ritual
                  to the family, ensuring that devotees understand the spiritual meaning behind
                  every step. He provides <strong className="text-foreground">personalised guidance</strong> based on individual horoscopes
                  and spiritual needs, making each experience truly meaningful.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Award, text: "30+ Years of Vedic Experience" },
                  { icon: Users, text: "10,000+ Families Served" },
                  { icon: Home, text: "Home Visit Services Available" },
                  { icon: BookOpen, text: "Mastery in All Vedic Rituals" },
                  { icon: Shield, text: "Certified Vedic Scholar" },
                  { icon: CheckCircle, text: "Transparent & Authentic Practices" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                    <Icon className="h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-sm font-medium text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
