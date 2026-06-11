import Reveal from "./Reveal";
import { ArrowRight, BrownieIcon, CakeIcon, CookieIcon } from "./icons";

const specialties = [
  {
    name: "Custom Cakes",
    emoji: "🎂",
    Icon: CakeIcon,
    description:
      "Birthdays, weddings & every little celebration in between — designed around your theme, flavours and vision.",
  },
  {
    name: "Brownies",
    emoji: "🍫",
    Icon: BrownieIcon,
    description:
      "Fudgy, rich and impossibly gooey. Classic chocolate, walnut, and seasonal specials baked fresh in small batches.",
  },
  {
    name: "Cookies",
    emoji: "🍪",
    Icon: CookieIcon,
    description:
      "Thick, chewy and loaded with chocolate. Perfect for gifting, dessert tables or a sweet everyday treat.",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-background py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What we bake</p>
            <h2 className="section-title mt-2">Our Specialties</h2>
            <p className="mt-4 text-base leading-relaxed text-espresso/70 sm:text-lg">
              A small, lovingly curated menu — each made to order so it arrives
              fresh, beautiful and full of flavour.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {specialties.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <article className="group h-full rounded-3xl border border-secondary/15 bg-white p-8 shadow-[0_8px_30px_-18px_rgba(59,35,20,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-parchment text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-background">
                  <item.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-espresso">
                  {item.name} <span aria-hidden="true">{item.emoji}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/70">
                  {item.description}
                </p>
                <a
                  href="#order"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-espresso"
                >
                  Order This
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
