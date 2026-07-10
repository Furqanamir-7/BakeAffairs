"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";
import { ArrowRight } from "./icons";

const CakeShowcase = dynamic(() => import("./CakeShowcase"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-maroon-glow" />
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-maroon-blush/40 blur-3xl lg:h-80 lg:w-80" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-maroon/5 blur-3xl lg:h-80 lg:w-80" />

      <div className="container-px relative grid w-full grid-cols-1 items-center gap-6 py-24 sm:gap-8 sm:py-28 lg:grid-cols-2 lg:gap-12 lg:py-8 xl:gap-16">
        <div className="w-full max-w-xl text-center lg:max-w-none lg:text-left">
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
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 font-serif text-[1.85rem] leading-[1.08] text-maroon sm:mt-3 sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            Baked with Love,
            <br />
            Crafted with Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-4 sm:text-base lg:mx-0 lg:max-w-lg"
          >
            Custom cakes, brownies &amp; cookies — lovingly made to order in{" "}
            {site.city}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[360px] xl:max-w-[380px]"
        >
          <div className="relative flex aspect-[4/5] max-h-[min(52svh,420px)] flex-col overflow-hidden rounded-[1.35rem] border border-maroon/40 bg-maroon-band shadow-soft sm:max-h-[min(58svh,480px)] sm:rounded-[1.5rem] lg:max-h-[min(70svh,520px)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(146,42,40,0.55),transparent_70%)]" />

            <div className="relative z-10 shrink-0 px-3 pt-3 sm:px-4 sm:pt-4">
              <Logo
                size="md"
                priority
                className="mx-auto h-10 w-auto drop-shadow-logo sm:h-12 lg:h-14"
              />
            </div>

            <div className="relative min-h-0 flex-1 pb-1">
              <CakeShowcase />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
