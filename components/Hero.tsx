"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroSparkles from "@/components/HeroSparkles";
import { site } from "@/lib/site";
import { ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-maroon-glow" />
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-maroon-blush/40 blur-3xl lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-maroon/5 blur-3xl lg:h-80 lg:w-80" />

      <div className="container-px relative grid w-full grid-cols-1 items-center gap-6 py-24 sm:gap-8 sm:py-28 lg:grid-cols-2 lg:items-end lg:gap-12 lg:pb-10 lg:pt-28 xl:gap-16">
        <div className="relative w-full max-w-xl text-center lg:mb-8 lg:max-w-none lg:self-center lg:text-left">
          <HeroSparkles />
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-lg italic text-maroon sm:text-xl md:text-2xl"
            >
              A home bakery in {site.city}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-2 font-serif text-[1.85rem] leading-[1.08] text-maroon sm:mt-3 sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Baked with Love,
              <br />
              Crafted with Care
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-4 sm:text-base lg:mx-0 lg:max-w-lg"
            >
              Custom cakes, brownies &amp; cookies — lovingly made to order in{" "}
              {site.city}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 flex w-full flex-row flex-wrap items-center justify-center gap-2.5 sm:mt-6 sm:gap-3 lg:justify-start"
            >
              <Link
                href="/order"
                className="btn-peach !px-5 !py-2.5 text-xs sm:!px-7 sm:!py-3.5 sm:text-sm"
              >
                Order Now
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="/menu"
                className="btn-outline !px-5 !py-2.5 text-xs sm:!px-7 sm:!py-3.5 sm:text-sm"
              >
                View Menu
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[240px] translate-y-2 sm:max-w-[300px] sm:translate-y-3 lg:mx-0 lg:max-w-[360px] lg:translate-y-6 xl:max-w-[380px] xl:translate-y-8"
        >
          <div className="relative aspect-[4/5] max-h-[min(52svh,420px)] overflow-hidden rounded-[1.35rem] border border-maroon/40 bg-maroon-band shadow-soft sm:max-h-[min(58svh,480px)] sm:rounded-[1.5rem] lg:max-h-[min(68svh,500px)]">
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Bake Affairs cake showcase"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cream/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
