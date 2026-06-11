import Reveal from "./Reveal";
import { StarIcon } from "./icons";

const testimonials = [
  {
    name: "Sara K.",
    role: "Birthday cake",
    quote:
      "The most beautiful cake I've ever ordered — and it tasted even better than it looked. Ayesha brought my whole idea to life.",
  },
  {
    name: "Hamza R.",
    role: "Brownie box",
    quote:
      "Honestly the fudgiest brownies in Lahore. Ordered for an office party and everyone kept asking where they were from.",
  },
  {
    name: "Mariam T.",
    role: "Wedding dessert table",
    quote:
      "So thoughtful, so professional, and every single thing was fresh. Bake Affairs made our event feel extra special.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-parchment py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Kind words</p>
            <h2 className="section-title mt-2">Loved by Our Customers</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative h-full rounded-3xl border border-secondary/15 bg-background p-8 shadow-soft">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-2 font-serif text-7xl leading-none text-secondary/15"
                >
                  &rdquo;
                </span>
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="relative mt-5 text-base leading-relaxed text-espresso/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-serif text-background">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-serif text-lg text-espresso">
                      {t.name}
                    </span>
                    <span className="block text-xs tracking-wide text-espresso/55">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
