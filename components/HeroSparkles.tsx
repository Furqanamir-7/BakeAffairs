"use client";

/** Full-hero twinkling star sparkles. */
export default function HeroSparkles() {
  const stars = Array.from({ length: 64 }, (_, i) => {
    const col = i % 8;
    const row = Math.floor(i / 8);
    const jitterX = ((i * 19) % 13) - 6;
    const jitterY = ((i * 11) % 11) - 5;
    return {
      id: i,
      left: `${4 + col * 12 + jitterX}%`,
      top: `${5 + row * 11.5 + jitterY}%`,
      size: 12 + (i % 7) * 6,
      delay: `${(i % 10) * 0.18}s`,
      duration: `${2.5 + (i % 6) * 0.4}s`,
      opacity: 0.2 + (i % 5) * 0.08,
      rotate: (i * 17) % 36 - 18,
    };
  });

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute select-none leading-none text-maroon"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.size,
            opacity: s.opacity,
            transform: `rotate(${s.rotate}deg)`,
            animation: `sparkle-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            textShadow: "0 0 8px rgba(109,18,19,0.22)",
          }}
        >
          ✦
        </span>
      ))}
      {stars.filter((_, i) => i % 3 === 0).map((s) => (
        <span
          key={`soft-${s.id}`}
          className="absolute select-none leading-none text-maroon-soft"
          style={{
            left: `calc(${s.left} + 3%)`,
            top: `calc(${s.top} + 4%)`,
            fontSize: 10 + (s.id % 4) * 3,
            opacity: 0.35,
            animation: `sparkle-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        >
          ✧
        </span>
      ))}
    </div>
  );
}
