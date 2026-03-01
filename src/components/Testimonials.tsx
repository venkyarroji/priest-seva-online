import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import pujaCeremony2 from "@/assets/puja-ceremony-2.jpeg";
import pujaCeremony3 from "@/assets/puja-ceremony-3.png";
import pujaCeremony4 from "@/assets/puja-ceremony-4.png";

const testimonials = [
  {
    name: "Ramesh Kumar",
    review: "Pandit ji performed Navagraha Pooja at our home with great devotion. The entire family felt blessed. Highly recommended for anyone seeking authentic Vedic rituals.",
    rating: 5,
    image: pujaCeremony2,
  },
  {
    name: "Sunita Devi",
    review: "We consulted for Sarpa Dosha Shanti and the remedies were very effective. His knowledge of scriptures and mantras is truly remarkable. Very satisfied.",
    rating: 5,
    image: pujaCeremony3,
  },
  {
    name: "Venkat Rao",
    review: "Our son's marriage puja was conducted beautifully. Every ritual was explained clearly to the family. A truly knowledgeable and humble priest.",
    rating: 5,
    image: pujaCeremony4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Testimonials</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Devotees Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={t.image}
                  alt={`Puja ceremony for ${t.name}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "{t.review}"
                </p>
                <p className="text-sm font-semibold text-foreground">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
