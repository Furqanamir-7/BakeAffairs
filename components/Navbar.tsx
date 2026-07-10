"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) => {
    const active = isActive(pathname, href);
    return `group relative text-sm font-medium tracking-wide transition-colors ${
      active ? "text-secondary" : "text-cream/75 hover:text-cream"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-visible border-b transition-all duration-300 ${
        scrolled || open
          ? "border-primary/30 bg-espresso/95 shadow-soft backdrop-blur-md"
          : "border-primary/20 bg-maroon-band"
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between sm:h-24">
        <Link
          href="/"
          className="rounded-2xl transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
          aria-label="Bake Affairs by Ayesha — home"
        >
          <Logo size="header" priority className="drop-shadow-logo" />
        </Link>

        <ul className="hidden items-center gap-7 lg:gap-8 xl:gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px transition-all duration-300 ${
                    isActive(pathname, link.href)
                      ? "w-full bg-secondary"
                      : "w-0 bg-secondary group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link href="/order" className="btn-peach !px-6 !py-2.5">
              Order Now
            </Link>
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
            className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-cream transition-all duration-300 ${
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
            className="overflow-hidden border-t border-primary/25 bg-espresso md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-3 py-3 font-serif text-xl transition-colors hover:bg-surface ${
                      isActive(pathname, link.href) ? "text-secondary" : "text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/order" className="btn-peach w-full">
                  Order Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
