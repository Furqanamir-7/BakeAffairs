"use client";

import Image from "next/image";
import { cakeImages } from "@/lib/content";

type Cake = (typeof cakeImages)[number];

function splitColumns(items: readonly Cake[], count: number) {
  const cols: Cake[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => {
    cols[i % count].push(item);
  });
  return cols;
}

function CakeCard({ cake }: { cake: Cake }) {
  return (
    <figure className="relative mb-4 overflow-hidden rounded-2xl shadow-soft sm:mb-5 sm:rounded-3xl">
      <div
        className={`relative w-full overflow-hidden ${
          cake.tall ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={cake.src}
          alt={cake.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/25 via-transparent to-transparent" />
      </div>
    </figure>
  );
}

function ScrollColumn({
  items,
  duration,
  reverse = false,
}: {
  items: Cake[];
  duration: number;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="relative h-[28rem] overflow-hidden sm:h-[34rem] lg:h-[40rem]">
      <div
        className={`flex flex-col will-change-transform ${
          reverse ? "animate-shop-scroll-reverse" : "animate-shop-scroll"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((cake, i) => (
          <CakeCard key={`${cake.src}-${i}`} cake={cake} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

type Props = {
  compact?: boolean;
};

export default function Shop({ compact = false }: Props) {
  const columns = splitColumns(cakeImages, 4);
  const mobileColumns = splitColumns(cakeImages, 2);

  return (
    <section
      className={`${compact ? "section-surface" : "bg-background"} py-12 sm:py-20`}
    >
      <div className="container-px">
        {!compact && (
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="eyebrow">From our kitchen</p>
            <h2 className="section-title mt-2 text-[1.75rem] sm:text-4xl md:text-5xl">
              Cakes worth celebrating
            </h2>
            <div className="peach-divider" aria-hidden="true" />
            <p className="text-body mt-4 text-sm sm:text-lg">
              A scrolling look at recent bakes — every cake made to order with care.
            </p>
          </div>
        )}

        {/* Mobile: 2 columns */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {mobileColumns.map((col, i) => (
            <ScrollColumn
              key={`m-${i}`}
              items={col}
              duration={28 + i * 6}
              reverse={i % 2 === 1}
            />
          ))}
        </div>

        {/* Tablet+: 4 columns */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {columns.map((col, i) => (
            <ScrollColumn
              key={`d-${i}`}
              items={col}
              duration={32 + i * 5}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
