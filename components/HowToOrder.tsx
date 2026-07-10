import Link from "next/link";
import Reveal from "./Reveal";
import { BrowseIcon, ChatIcon, GiftIcon } from "./icons";

const steps = [
  {
    n: "01",
    title: "Browse the menu",
    Icon: BrowseIcon,
    description:
      "Pick your cake, brownies or deal. Order at least 3–4 days ahead.",
  },
  {
    n: "02",
    title: "Confirm & prepay",
    Icon: ChatIcon,
    description:
      "DM us on Instagram with your date and details. Full prepayment confirms the order.",
  },
  {
    n: "03",
    title: "Pick up your order",
    Icon: GiftIcon,
    description:
      "We don’t deliver — collect in person or arrange InDrive/Yango (car recommended).",
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
          <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-9 hidden h-px bg-maroon/20 md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <div className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-maroon/20 bg-maroon p-5 text-cream shadow-soft">
                    <step.Icon className="h-8 w-8" />
                  </div>
                </div>
                <span className="mt-5 block font-serif text-sm tracking-[0.3em] text-maroon">
                  {step.n}
                </span>
                <h3 className="mt-1 font-serif text-2xl text-maroon">{step.title}</h3>
                <p className="text-body mx-auto mt-3 max-w-xs text-sm">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-ink/55">
            Full details on lead time, payment and pickup are on our{" "}
            <Link
              href="/policies"
              className="text-maroon underline-offset-4 hover:underline"
            >
              Policies
            </Link>{" "}
            page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
