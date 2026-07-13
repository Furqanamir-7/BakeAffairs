"use client";

/** Soft sparkling dots for the hero background. */
export default function HeroSparkles() {
  const sparks = [
    { top: "12%", left: "8%", size: 3, delay: "0s" },
    { top: "18%", left: "22%", size: 2, delay: "0.4s" },
    { top: "10%", left: "68%", size: 2.5, delay: "0.8s" },
    { top: "22%", left: "88%", size: 3, delay: "1.2s" },
    { top: "35%", left: "6%", size: 2, delay: "0.2s" },
    { top: "42%", left: "92%", size: 2.5, delay: "1s" },
    { top: "55%", left: "14%", size: 2, delay: "1.6s" },
    { top: "58%", left: "78%", size: 3, delay: "0.6s" },
    { top: "70%", left: "4%", size: 2.5, delay: "1.4s" },
    { top: "74%", left: "96%", size: 2, delay: "0.3s" },
    { top: "82%", left: "28%", size: 3, delay: "1.1s" },
    { top: "86%", left: "62%", size: 2, delay: "0.9s" },
    { top: "28%", left: "48%", size: 2, delay: "1.8s" },
    { top: "48%", left: "38%", size: 2.5, delay: "0.5s" },
    { top: "64%", left: "52%", size: 2, delay: "1.5s" },
    { top: "16%", left: "40%", size: 2, delay: "2s" },
    { top: "90%", left: "18%", size: 2.5, delay: "0.7s" },
    { top: "38%", left: "72%", size: 2, delay: "1.3s" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-maroon/35 shadow-[0_0_8px_rgba(109,18,19,0.35)]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `sparkle-twinkle 2.8s ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
      {sparks.slice(0, 8).map((s, i) => (
        <span
          key={`cross-${i}`}
          className="absolute text-maroon/25"
          style={{
            top: s.top,
            left: `calc(${s.left} + 3%)`,
            fontSize: 10 + (i % 3) * 2,
            animation: `sparkle-twinkle 3.4s ease-in-out ${s.delay} infinite`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
