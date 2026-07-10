import Link from "next/link";
import Reveal from "./Reveal";
import { deliveryNotice, orderingPolicy } from "@/lib/menu";

export default function Policies() {
  return (
    <section className="section-surface py-16 sm:py-24">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal>
          <div>
            <h2 className="font-serif text-2xl text-maroon sm:text-3xl">
              Ordering Policy
            </h2>
            <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-ink/75 sm:text-base">
              {orderingPolicy.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-maroon/15 pt-12">
            <h2 className="font-serif text-2xl text-maroon sm:text-3xl">
              Delivery Notice (InDrive / Yango)
            </h2>
            <p className="mt-3 text-sm text-ink/55">
              For orders arranged via InDrive or Yango:
            </p>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-sm leading-relaxed text-ink/75 sm:text-base">
              {deliveryNotice.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/menu" className="btn-outline">
              View Menu
            </Link>
            <Link href="/order" className="btn-peach">
              Place an Order
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
