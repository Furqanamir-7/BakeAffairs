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
    <section className="bg-primary py-20 text-background sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-2xl italic text-background/90">
              Simple &amp; sweet
            </p>
            <h2 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              How to Order
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/85 sm:text-lg">
              Three easy steps from craving to your first bite.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-9 hidden h-px bg-background/30 md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-background/40 bg-primary p-5 text-background shadow-soft">
                    <step.Icon className="h-8 w-8" />
                  </div>
                </div>
                <span className="mt-5 block font-serif text-sm tracking-[0.3em] text-background/70">
                  {step.n}
                </span>
                <h3 className="mt-1 font-serif text-2xl">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-background/85">
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
