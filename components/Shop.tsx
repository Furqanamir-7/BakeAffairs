"use client";

import Image from "next/image";
import { cakeImages } from "@/lib/content";
import { whatsappOrderLink } from "@/lib/site";
import { ArrowRight } from "./icons";

function OrderCard({
  cake,
}: {
  cake: (typeof cakeImages)[number];
}) {
  return (
    <article className="card-maroon flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={cake.src}
          alt={cake.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-lg text-cream sm:text-xl">{cake.name}</h3>
        <p className="mt-2 flex-1 text-sm text-cream/65">
          Made to order — message us on WhatsApp to place yours.
        </p>
        <a
          href={whatsappOrderLink(cake.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-5 w-full border border-cream bg-cream text-maroon shadow-soft hover:bg-maroon-blush hover:shadow-lift hover:-translate-y-0.5"
        >
          Order Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

/** Full shop catalog (orderable cards). */
export default function Shop() {
  return (
    <section className="section-surface py-12 sm:py-20">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {cakeImages.map((cake) => (
            <OrderCard key={cake.src} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  );
}
