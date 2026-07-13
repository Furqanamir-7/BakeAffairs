import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { homeTeasers } from "@/lib/site";

export default function HomeTeasers() {
  return (
    <section className="section-surface py-16 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Explore</p>
            <h2 className="section-title mt-2 text-[1.75rem] sm:text-4xl md:text-5xl">
              Everything We Bake
            </h2>
            <div className="peach-divider" aria-hidden="true" />
            <p className="text-body mt-4 text-sm sm:text-lg">
              Browse our story, menu and shop — then place your order when
              something catches your eye.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-7 md:grid-cols-3">
          {homeTeasers.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.1}>
              <Link
                href={item.href}
                className="card-maroon group flex h-full flex-col p-6 sm:p-8"
              >
                <span
                  className="font-serif text-3xl text-cream/25"
                  aria-hidden="true"
                >
                  {item.title.charAt(0)}
                </span>
                <h3 className="mt-4 font-serif text-xl text-cream sm:mt-5 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon-blush transition-colors group-hover:text-cream">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
