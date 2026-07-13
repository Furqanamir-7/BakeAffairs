"use client";

import Image from "next/image";
import Link from "next/link";
import { cakeImages } from "@/lib/content";
import { whatsappOrderLink } from "@/lib/site";
import { ArrowRight } from "./icons";

const bestSellers = cakeImages.slice(0, 6);

export default function BestSellers() {
  const topRow = bestSellers.slice(0, 4);
  const bottomRow = bestSellers.slice(4, 6);

  return (
    <section className="bg-background py-12 sm:py-20">
      <div className="container-px">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="eyebrow">From our kitchen</p>
          <h2 className="section-title mt-2 text-[1.75rem] sm:text-4xl md:text-5xl">
            Best Sellers
          </h2>
          <div className="peach-divider" aria-hidden="true" />
          <p className="text-body mt-4 text-sm sm:text-lg">
            A few favourites our customers order again and again.
          </p>
          <Link href="/shop" className="btn-peach mt-7 inline-flex">
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 on top */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {topRow.map((cake) => (
            <article
              key={cake.src}
              className="overflow-hidden rounded-2xl border border-maroon/10 bg-surface shadow-soft sm:rounded-3xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={cake.src}
                  alt={cake.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-serif text-sm text-maroon sm:text-base">
                  {cake.name}
                </h3>
                <a
                  href={whatsappOrderLink(cake.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-maroon/80 underline-offset-2 hover:text-maroon hover:underline sm:text-sm"
                >
                  Order Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 2 centered below */}
        <div className="mt-3 flex justify-center gap-3 sm:mt-5 sm:gap-5">
          {bottomRow.map((cake) => (
            <article
              key={cake.src}
              className="w-[calc(50%-0.375rem)] overflow-hidden rounded-2xl border border-maroon/10 bg-surface shadow-soft sm:w-[calc(25%-0.75rem)] sm:rounded-3xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={cake.src}
                  alt={cake.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-serif text-sm text-maroon sm:text-base">
                  {cake.name}
                </h3>
                <a
                  href={whatsappOrderLink(cake.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-maroon/80 underline-offset-2 hover:text-maroon hover:underline sm:text-sm"
                >
                  Order Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
