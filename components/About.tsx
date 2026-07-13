import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/lib/site";
import { aboutStory } from "@/lib/content";

type Props = {
  compact?: boolean;
};

export default function About({ compact = false }: Props) {
  return (
    <section
      className={`${compact ? "section-surface" : "section-deep"} py-16 sm:py-24`}
    >
      <div className="container-px grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-maroon-blush/70 blur-lg" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-maroon/15 bg-surface-soft shadow-soft">
              <Image
                src="/brand/ayesha.jpg"
                alt={`${site.baker}, founder of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_20%]"
                priority={compact}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-maroon/85 via-maroon/35 to-transparent p-5 pt-16">
                <p className="font-script text-lg italic text-maroon-blush">
                  Hello, I&apos;m
                </p>
                <p className="font-serif text-2xl text-cream">{site.baker}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {!compact && (
              <>
                <p className="eyebrow">Our little story</p>
                <h2 className="section-title mt-2">
                  BakeAffairs by Ayesha
                </h2>
              </>
            )}

            <p
              className={`font-serif text-xl leading-snug text-maroon sm:text-2xl ${
                compact ? "" : "mt-6"
              }`}
            >
              {aboutStory.greeting}
            </p>

            <div className="text-body mt-5 space-y-4 text-sm sm:text-base">
              {aboutStory.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>

            <dl className="mt-9 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { k: "2022", v: "Started from home" },
                { k: "100%", v: "Made to order" },
                { k: "Lahore", v: "Word of mouth" },
              ].map((stat) => (
                <div key={stat.v} className="card-maroon px-3 py-4 text-center sm:px-4 sm:py-5">
                  <dt className="font-serif text-xl text-cream sm:text-2xl">
                    {stat.k}
                  </dt>
                  <dd className="mt-1 text-[10px] font-medium tracking-wide text-cream/60 sm:text-xs">
                    {stat.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
