import { Star, Quote } from "lucide-react";
import pujaCeremony2 from "@/assets/puja-ceremony-2.jpeg";
import pujaCeremony3 from "@/assets/puja-ceremony-3.png";
import pujaCeremony4 from "@/assets/puja-ceremony-4.png";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Hyderabad",
    review: "Pandit ji performed Navagraha Pooja at our home with great devotion. The entire family felt blessed. Highly recommended for anyone seeking authentic Vedic rituals.",
    rating: 5,
    image: pujaCeremony2,
  },
  {
    name: "Sunita Devi",
    location: "Mancherial",
    review: "We consulted for Sarpa Dosha Shanti and the remedies were very effective. His knowledge of scriptures and mantras is truly remarkable. Very satisfied.",
    rating: 5,
    image: pujaCeremony3,
  },
  {
    name: "Venkat Rao",
    location: "Warangal",
    review: "Our son's marriage puja was conducted beautifully. Every ritual was explained clearly to the family. A truly knowledgeable and humble priest.",
    rating: 5,
    image: pujaCeremony4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 pattern-overlay">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Testimonials</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            What Devotees Say
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={t.image}
                  alt={`Puja ceremony for ${t.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Quote icon */}
                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/90">
                  <Quote className="h-5 w-5 text-secondary-foreground" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.review}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
