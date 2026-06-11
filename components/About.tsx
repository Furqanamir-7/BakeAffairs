import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-parchment py-20 sm:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/15 blur-lg" />
            <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem] border border-secondary/15 bg-background shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/70 via-background to-parchment" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[6rem] leading-none">👩‍🍳</span>
              </div>
              <div className="absolute bottom-5 left-5 rounded-xl bg-secondary px-4 py-3 text-background shadow-soft">
                <p className="font-script text-lg italic">Hello, I&apos;m</p>
                <p className="font-serif text-xl">{site.baker}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="eyebrow">Our little story</p>
            <h2 className="section-title mt-2">
              A passion project, baked one order at a time
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-espresso/75 sm:text-lg">
              <p>
                Bake Affairs began in {site.baker}&apos;s home kitchen in{" "}
                {site.city} — a small space filled with the smell of warm vanilla,
                melting chocolate and the quiet joy of making something by hand.
                What started as baking for family and friends slowly grew into a
                boutique bakery built on care, patience and real ingredients.
              </p>
              <p>
                Every cake, brownie and cookie is made to order, never mass
                produced. {site.baker} treats each bake like it&apos;s for someone
                she loves — because for her, that&apos;s exactly what it feels
                like. No shortcuts, no preservatives, just honest baking and a
                whole lot of heart.
              </p>
            </div>

            <dl className="mt-9 grid grid-cols-3 gap-4">
              {[
                { k: "100%", v: "Made to order" },
                { k: "Fresh", v: "Real ingredients" },
                { k: "Lahore", v: "Local & loved" },
              ].map((stat) => (
                <div
                  key={stat.v}
                  className="rounded-2xl border border-secondary/15 bg-background px-4 py-5 text-center"
                >
                  <dt className="font-serif text-2xl text-secondary">
                    {stat.k}
                  </dt>
                  <dd className="mt-1 text-xs font-medium tracking-wide text-espresso/60">
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
