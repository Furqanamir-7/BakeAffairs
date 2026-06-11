"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { ArrowRight, LeafSprig } from "./icons";

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

        {/* Hero visual — layered placeholder card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/60 to-primary/30 blur-xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-secondary/15 bg-parchment shadow-lift">
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-parchment to-primary/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="animate-floaty text-[7rem] leading-none drop-shadow-sm">
                🎂
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/85 px-5 py-4 backdrop-blur-sm">
              <p className="font-script text-xl italic text-secondary">
                Signature
              </p>
              <p className="font-serif text-lg text-espresso">
                Custom celebration cakes
              </p>
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
