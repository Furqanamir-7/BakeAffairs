import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { homeTeasers } from "@/lib/site";

export default function HomeTeasers() {
  return (
    <section className="section-surface py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Explore</p>
            <h2 className="section-title mt-2">Everything We Bake</h2>
            <div className="peach-divider" aria-hidden="true" />
            <p className="text-body mt-4 text-base sm:text-lg">
              Browse our story, menu and gallery — then place your order when
              something catches your eye.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {homeTeasers.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.1}>
              <Link
                href={item.href}
                className="card-peach group flex h-full flex-col p-8"
              >
                <span className="font-serif text-3xl text-maroon/35" aria-hidden="true">
                  {item.title.charAt(0)}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-maroon">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-maroon transition-colors group-hover:text-maroon-light">
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
