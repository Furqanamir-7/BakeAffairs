"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { site } from "@/lib/site";
import { ArrowRight, LeafSprig } from "./icons";

const CakeShowcase = dynamic(() => import("./CakeShowcase"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <div className="container-px relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            A home bakery in {site.city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 font-serif text-4xl leading-[1.08] text-espresso sm:text-6xl md:text-7xl"
          >
            Baked with Love,
            <br />
            <span className="text-secondary">Crafted with Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-espresso/70 sm:text-lg lg:mx-0"
          >
            Custom cakes, brownies &amp; cookies — made to order in {site.city}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start lg:justify-start"
          >
            <a href="#order" className="btn-filled w-full sm:w-auto">
              Order Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#menu" className="btn-outline w-full sm:w-auto">
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center justify-center text-primary lg:justify-start"
          >
            <LeafSprig className="h-8 w-56" />
          </motion.div>
        </div>

        {/* Hero visual — interactive 3D wireframe cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/60 to-primary/30 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-secondary/20 bg-espresso shadow-lift">
            {/* warm radial glow behind the cake */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(196,149,106,0.28),transparent_60%)]" />

            {/* the interactive cake */}
            <CakeShowcase />

            {/* globe-style floating data labels */}
            <div className="pointer-events-none absolute right-3 top-4 rounded-lg bg-espresso/85 px-3 py-2 shadow-soft ring-1 ring-primary/25 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Tiers
              </p>
              <p className="font-serif text-sm text-accent">3 layers stacked</p>
              <p className="text-[10px] text-accent/55">
                Vanilla · Choc · Velvet
              </p>
            </div>

            <div className="pointer-events-none absolute left-3 top-1/3 rounded-lg bg-espresso/85 px-3 py-2 shadow-soft ring-1 ring-primary/25 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Topping
              </p>
              <p className="font-serif text-sm text-accent">Cherries &amp; cream</p>
            </div>

            <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div className="rounded-2xl bg-background/90 px-5 py-4 backdrop-blur-sm">
                <p className="font-script text-xl italic text-secondary">
                  Signature
                </p>
                <p className="font-serif text-lg text-espresso">
                  Custom celebration cakes
                </p>
              </div>
              <span className="hidden rounded-full bg-primary/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-espresso sm:inline-block">
                Drag to spin
              </span>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 hidden rotate-[-6deg] rounded-2xl bg-background px-4 py-3 shadow-soft sm:block">
            <p className="text-xs font-medium tracking-wide text-espresso/60">
              Freshly baked
            </p>
            <p className="font-serif text-lg text-secondary">Made to order</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
