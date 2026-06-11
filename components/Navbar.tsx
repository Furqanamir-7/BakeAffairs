"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <a
          href="#home"
          className="font-serif text-2xl tracking-tight text-espresso"
        >
          {site.name}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-espresso/80 transition-colors hover:text-secondary"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href="#order" className="btn-filled !px-6 !py-2.5">
              Order Now
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-espresso transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-espresso transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-espresso transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-secondary/10 bg-background md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-serif text-xl text-espresso transition-colors hover:bg-parchment"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#order"
                  onClick={() => setOpen(false)}
                  className="btn-filled w-full"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
