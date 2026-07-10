"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";
import { ArrowRight, LeafSprig } from "./icons";

const CakeShowcase = dynamic(() => import("./CakeShowcase"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-32 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-maroon-glow" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-maroon-blush/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-maroon/5 blur-3xl" />

      <div className="container-px relative grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
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
            className="mt-3 font-serif text-4xl leading-[1.08] text-maroon sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Baked with Love,
            <br />
            <span className="text-maroon-light">Crafted with Care</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="text-body mx-auto mt-6 max-w-lg text-base sm:text-lg lg:mx-0"
          >
            Custom cakes, brownies &amp; cookies — lovingly made to order in{" "}
            {site.city}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start"
          >
            <Link href="/order" className="btn-peach w-full sm:w-auto">
              Order Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/menu" className="btn-outline w-full sm:w-auto">
              View Menu
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center justify-center text-maroon/50 lg:justify-start"
          >
            <LeafSprig className="h-7 w-48" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:order-2 lg:max-w-[400px]"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] border border-maroon/15 bg-surface shadow-soft">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(232,197,192,0.55),transparent_70%)]" />

            <div className="relative px-4 pb-2 pt-5 sm:px-5 sm:pt-6">
              <Logo size="lg" priority className="mx-auto drop-shadow-logo" />
            </div>

            <div className="relative h-[250px] sm:h-[290px] lg:h-[320px]">
              <CakeShowcase />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
