import Reveal from "./Reveal";
import { BrowseIcon, ChatIcon, GiftIcon } from "./icons";

const steps = [
  {
    n: "01",
    title: "Browse the menu",
    Icon: BrowseIcon,
    description:
      "Explore our specialties and gather a little inspiration for your order.",
  },
  {
    n: "02",
    title: "DM on Instagram",
    Icon: ChatIcon,
    description:
      "Send us a message with your idea, date and serving size. We'll confirm the details.",
  },
  {
    n: "03",
    title: "Receive your order",
    Icon: GiftIcon,
    description:
      "Pick up your freshly baked treats — beautifully packed and ready to enjoy.",
  },
];

export default function HowToOrder() {
  return (
    <section className="section-surface py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Simple &amp; sweet</p>
            <h2 className="section-title mt-2">How to Order</h2>
            <div className="peach-divider" aria-hidden="true" />
            <p className="text-body mt-4 text-base sm:text-lg">
              Three easy steps from craving to your first bite.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-9 hidden h-px bg-secondary/30 md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-secondary/40 bg-maroon-light p-5 text-cream shadow-soft ring-2 ring-primary/40">
                    <step.Icon className="h-8 w-8" />
                  </div>
                </div>
                <span className="mt-5 block font-serif text-sm tracking-[0.3em] text-secondary">
                  {step.n}
                </span>
                <h3 className="mt-1 font-serif text-2xl text-cream">{step.title}</h3>
                <p className="text-body mx-auto mt-3 max-w-xs text-sm">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
