import Link from "next/link";
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

type Props = {
  compact?: boolean;
};

export default function Menu({ compact = false }: Props) {
  return (
    <section className={`${compact ? "section-surface" : "section-deep"} py-16 sm:py-24`}>
      <div className="container-px">
        {!compact && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">What we bake</p>
              <h2 className="section-title mt-2">Our Specialties</h2>
              <p className="text-body mt-4 text-base sm:text-lg">
                A small, lovingly curated menu — each made to order so it arrives
                fresh, beautiful and full of flavour.
              </p>
            </div>
          </Reveal>
        )}

        <div className={`grid gap-7 md:grid-cols-3 ${compact ? "" : "mt-14"}`}>
          {specialties.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <article className="card-peach group h-full p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-cream">
                  <item.Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-primary">
                  {item.name} <span aria-hidden="true">{item.emoji}</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-espresso/75">{item.description}</p>
                <Link
                  href="/order"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-maroon-light"
                >
                  Order This
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
