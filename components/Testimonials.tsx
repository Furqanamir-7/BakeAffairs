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
    <section className="section-deep py-16 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Kind words</p>
            <h2 className="section-title mt-2 text-[1.75rem] sm:text-4xl md:text-5xl">
              Loved by Our Customers
            </h2>
            <div className="peach-divider" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="card-maroon relative h-full p-6 sm:p-8">
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-2 font-serif text-7xl leading-none text-cream/10"
                >
                  &rdquo;
                </span>
                <div className="flex gap-1 text-maroon-blush">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="relative mt-5 text-sm leading-relaxed text-cream/80 sm:text-base">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 font-serif text-cream">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-serif text-lg text-cream">
                      {t.name}
                    </span>
                    <span className="block text-xs tracking-wide text-cream/55">
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
