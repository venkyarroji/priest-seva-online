import { Star, Quote } from "lucide-react";
import pujaCeremony2 from "@/assets/puja-ceremony-2.jpeg";
import pujaCeremony3 from "@/assets/puja-ceremony-3.png";
import pujaCeremony4 from "@/assets/puja-ceremony-4.png";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Hyderabad",
    review: "Pandit ji performed Navagraha Pooja at our home with exceptional devotion and precision. Every mantra was recited perfectly, and the entire family felt truly blessed. We highly recommend Sri Laxmi Ganapathi Jyothishyalayam to anyone seeking authentic Vedic rituals.",
    rating: 5,
    image: pujaCeremony2,
  },
  {
    name: "Sunita Devi",
    location: "Mancherial",
    review: "We consulted Pandit ji for Sarpa Dosha Shanti, and the remedies brought remarkable peace to our family. His deep knowledge of the scriptures and compassionate guidance made all the difference. Truly grateful.",
    rating: 5,
    image: pujaCeremony3,
  },
  {
    name: "Venkat Rao",
    location: "Warangal",
    review: "Our son's wedding was conducted beautifully — every ritual was explained to the family with patience and care. Pandit ji's warmth and expertise made our celebration truly memorable. A genuinely humble and knowledgeable priest.",
    rating: 5,
    image: pujaCeremony4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 pattern-overlay">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Testimonials</p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">
            Voices of Our Devotees
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-4 sm:mt-6 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Hear from families who have experienced the power of authentic Vedic rituals with Sri Laxmi Ganapathi Jyothishyalayam.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="group rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={t.image}
                  alt={`Vedic puja ceremony for ${t.name}'s family`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-secondary/90">
                  <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  "{t.review}"
                </p>
                <div className="border-t border-border pt-3 sm:pt-4">
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
