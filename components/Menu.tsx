import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import {
  menuDeals,
  menuDisclaimer,
  menuNotes,
  menuSections,
} from "@/lib/menu";

type Props = {
  compact?: boolean;
};

export default function Menu({ compact = false }: Props) {
  return (
    <section
      className={`${compact ? "section-surface" : "section-deep"} py-16 sm:py-24`}
    >
      <div className="container-px">
        {!compact && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">What we bake</p>
              <h2 className="section-title mt-2">Our Menu</h2>
              <div className="peach-divider" aria-hidden="true" />
              <p className="text-body mt-4 text-base sm:text-lg">
                Cakes, brownies, cupcakes and deals — made to order in Lahore.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal delay={compact ? 0 : 0.08}>
          <p
            className={`mx-auto max-w-2xl text-center text-sm italic text-ink/55 ${
              compact ? "" : "mt-10"
            }`}
          >
            {menuDisclaimer}
          </p>
        </Reveal>

        <div className="mt-12 space-y-14">
          {menuSections.map((section, i) => (
            <Reveal key={section.id} delay={Math.min(i * 0.04, 0.2)}>
              <div>
                <div className="flex flex-col gap-2 border-b border-maroon/15 pb-3 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="font-serif text-2xl text-maroon sm:text-[1.65rem]">
                    {section.title}
                  </h3>
                  {section.note && (
                    <p className="max-w-md text-xs text-ink/45 sm:text-right">
                      {section.note}
                    </p>
                  )}
                </div>
                <ul className="mt-1 divide-y divide-maroon/10">
                  {section.items.map((item) => (
                    <li
                      key={`${section.id}-${item.name}`}
                      className="flex items-baseline justify-between gap-6 py-3.5"
                    >
                      <span className="text-sm text-ink/80 sm:text-base">
                        {item.name}
                      </span>
                      <span className="shrink-0 font-medium tabular-nums text-maroon">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div>
              <div className="border-b border-maroon/15 pb-3">
                <h3 className="font-serif text-2xl text-maroon sm:text-[1.65rem]">
                  Deals
                </h3>
              </div>
              <ul className="mt-1 divide-y divide-maroon/10">
                {menuDeals.map((deal) => (
                  <li
                    key={deal.name}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink sm:text-base">
                        {deal.name}
                      </p>
                      <p className="mt-0.5 text-sm text-ink/55">
                        {deal.includes}
                      </p>
                    </div>
                    <span className="shrink-0 font-medium tabular-nums text-maroon">
                      {deal.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 border-t border-maroon/15 pt-8">
            <ul className="space-y-2 text-sm text-ink/60">
              {menuNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/order" className="btn-peach">
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/policies"
                className="text-sm text-ink/65 underline-offset-4 transition-colors hover:text-maroon hover:underline"
              >
                Ordering &amp; pickup policies
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
