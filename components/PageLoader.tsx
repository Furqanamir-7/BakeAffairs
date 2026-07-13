"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";

const motifs = [
  { id: "cupcake", top: "12%", left: "10%", delay: "0s", size: "w-9 h-9 sm:w-11 sm:h-11" },
  { id: "heart", top: "18%", left: "78%", delay: "0.4s", size: "w-7 h-7 sm:w-9 sm:h-9" },
  { id: "cookie", top: "68%", left: "14%", delay: "0.8s", size: "w-8 h-8 sm:w-10 sm:h-10" },
  { id: "whisk", top: "72%", left: "82%", delay: "0.2s", size: "w-9 h-9 sm:w-11 sm:h-11" },
  { id: "cherry", top: "42%", left: "8%", delay: "1s", size: "w-7 h-7 sm:w-8 sm:h-8" },
  { id: "star", top: "38%", left: "88%", delay: "0.6s", size: "w-6 h-6 sm:w-7 sm:h-7" },
  { id: "heart", top: "84%", left: "48%", delay: "1.2s", size: "w-6 h-6" },
  { id: "cupcake", top: "8%", left: "48%", delay: "0.3s", size: "w-7 h-7 sm:w-8 sm:h-8" },
] as const;

function Motif({ id }: { id: (typeof motifs)[number]["id"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
    className: "h-full w-full",
  };

  switch (id) {
    case "cupcake":
      return (
        <svg {...common}>
          <path d="M8 10.5h8c.8 0 1.4.7 1.3 1.5l-.8 6.2A1.5 1.5 0 0 1 15 19.5H9a1.5 1.5 0 0 1-1.5-1.3l-.8-6.2c-.1-.8.5-1.5 1.3-1.5Z" opacity="0.9" />
          <path d="M7.5 10.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="4.2" r="1.2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7.2-4.4-9.2-8.2C1.2 8.6 2.8 5.5 6 5.2c1.8-.2 3.4.7 4 2.1.6-1.4 2.2-2.3 4-2.1 3.2.3 4.8 3.4 3.2 6.6C19.2 15.6 12 20 12 20Z" />
        </svg>
      );
    case "cookie":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" opacity="0.9" />
          <circle cx="9" cy="10" r="1.1" fill="#FAF6F2" />
          <circle cx="14.5" cy="9.5" r="1" fill="#FAF6F2" />
          <circle cx="11" cy="14.5" r="1.15" fill="#FAF6F2" />
          <circle cx="15" cy="14" r="0.9" fill="#FAF6F2" />
        </svg>
      );
    case "whisk":
      return (
        <svg {...common}>
          <path
            d="M8 3.5c2.2 2.8 3.2 5.8 3.2 8.8M12 3.5c0 3.2.6 6.2 2.2 8.8M16 3.5c-1.4 2.5-2.2 5.2-2.2 8.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d="M11.2 12.5h1.6L14 21h-4l1.2-8.5Z" />
        </svg>
      );
    case "cherry":
      return (
        <svg {...common}>
          <path
            d="M12 9c1.2-2.5 3.2-4 5.5-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="9.5" cy="15.5" r="3.2" />
          <circle cx="14.8" cy="14.2" r="3" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 3.5 13.8 9h5.5l-4.4 3.3 1.7 5.5L12 14.8 7.4 17.8l1.7-5.5L4.7 9h5.5L12 3.5Z" />
        </svg>
      );
  }
}

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let timeoutId = 0;
    setVisible(true);

    const minMs = 750;
    const started = Date.now();

    const hide = () => {
      if (cancelled) return;
      const wait = Math.max(0, minMs - (Date.now() - started));
      timeoutId = window.setTimeout(() => {
        if (!cancelled) setVisible(false);
      }, wait);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      timeoutId = window.setTimeout(hide, 2000);
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", hide);
      window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading Bake Affairs"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#FAF6F2]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(232,197,192,0.45),transparent_70%)]" />

          {motifs.map((motif) => (
            <div
              key={`${motif.id}-${motif.top}-${motif.left}`}
              className={`pointer-events-none absolute text-maroon/25 ${motif.size}`}
              style={{
                top: motif.top,
                left: motif.left,
                animation: `motif-drift 5.5s ease-in-out ${motif.delay} infinite`,
              }}
            >
              <Motif id={motif.id} />
            </div>
          ))}

          <div className="relative z-10 flex flex-col items-center px-6">
            <Logo
              brand={false}
              size="hero"
              priority
              className="h-80 w-auto drop-shadow-logo sm:h-[22rem] md:h-[26rem]"
            />
            <p className="mt-3 font-serif text-sm uppercase tracking-[0.28em] text-maroon sm:text-base">
              Bake Affairs
            </p>
            <div className="mt-6 flex items-center gap-2.5" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-maroon"
                  style={{
                    animation: `loader-dot 1.1s ease-in-out ${i * 0.16}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
