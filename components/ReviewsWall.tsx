"use client";

import Image from "next/image";
import { reviewImages } from "@/lib/reviews";

type Review = (typeof reviewImages)[number];

function splitColumns(items: readonly Review[], count: number) {
  const cols: Review[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => {
    cols[i % count].push(item);
  });
  return cols;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="relative mb-4 overflow-hidden rounded-2xl border border-maroon/10 bg-surface shadow-soft sm:mb-5 sm:rounded-3xl">
      <div
        className={`relative w-full ${
          review.tall ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={review.src}
          alt={review.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}

function DriftColumn({
  items,
  duration,
  reverse = false,
}: {
  items: Review[];
  duration: number;
  reverse?: boolean;
}) {
  // Duplicate for seamless alternate scroll
  const loop = [...items, ...items];

  return (
    <div className="relative h-[30rem] overflow-hidden sm:h-[36rem] lg:h-[42rem]">
      <div
        className={`flex flex-col will-change-transform ${
          reverse ? "animate-reviews-drift-reverse" : "animate-reviews-drift"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((review, i) => (
          <ReviewCard key={`${review.src}-${i}`} review={review} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-background to-transparent sm:h-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background to-transparent sm:h-20" />
    </div>
  );
}

export default function ReviewsWall() {
  const columns = splitColumns(reviewImages, 4);
  const mobileColumns = splitColumns(reviewImages, 2);

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container-px">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <p className="eyebrow">Kind words</p>
          <h2 className="section-title mt-2 text-[1.75rem] sm:text-4xl md:text-5xl">
            Reviews that keep us going
          </h2>
          <div className="peach-divider" aria-hidden="true" />
          <p className="text-body mt-4 text-sm sm:text-lg">
            Real messages from customers who trusted Bake Affairs with their
            celebrations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {mobileColumns.map((col, i) => (
            <DriftColumn
              key={`m-${i}`}
              items={col}
              duration={48 + i * 8}
              reverse={i % 2 === 1}
            />
          ))}
        </div>

        <div className="hidden gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {columns.map((col, i) => (
            <DriftColumn
              key={`d-${i}`}
              items={col}
              duration={52 + i * 6}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
