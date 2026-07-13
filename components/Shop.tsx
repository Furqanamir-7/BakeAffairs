"use client";

import Image from "next/image";
import Link from "next/link";
import { cakeImages } from "@/lib/content";
import { whatsappOrderLink } from "@/lib/site";
import { ArrowRight } from "./icons";

type Cake = (typeof cakeImages)[number];

function splitColumns(items: readonly Cake[], count: number) {
  const cols: Cake[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => {
    cols[i % count].push(item);
  });
  return cols;
}

function MarqueeCard({ cake }: { cake: Cake }) {
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
          <MarqueeCard key={`${cake.src}-${i}`} cake={cake} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

function OrderCard({ cake }: { cake: Cake }) {
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

type Props = {
  /** Shop page catalog of orderable cards */
  compact?: boolean;
};

export default function Shop({ compact = false }: Props) {
  const columns = splitColumns(cakeImages, 4);
  const mobileColumns = splitColumns(cakeImages, 2);

  if (compact) {
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

  return (
    <section className="bg-background py-12 sm:py-20">
      <div className="container-px">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="eyebrow">From our kitchen</p>
          <h2 className="section-title mt-2 text-[1.75rem] sm:text-4xl md:text-5xl">
            Cakes worth celebrating
          </h2>
          <div className="peach-divider" aria-hidden="true" />
          <p className="text-body mt-4 text-sm sm:text-lg">
            A scrolling look at recent bakes — every cake made to order with care.
          </p>
          <Link href="/shop" className="btn-peach mt-7 inline-flex">
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

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
