"use client";

/** Star sparkles confined to the hero text column (behind copy). */
export default function HeroSparkles() {
  const stars = Array.from({ length: 28 }, (_, i) => {
    const col = i % 5;
    const row = Math.floor(i / 5);
    const jitterX = ((i * 17) % 9) - 4;
    const jitterY = ((i * 13) % 7) - 3;
    return {
      id: i,
      left: `${8 + col * 20 + jitterX}%`,
      top: `${8 + row * 15 + jitterY}%`,
      size: 14 + (i % 5) * 6,
      delay: `${(i % 8) * 0.2}s`,
      duration: `${2.8 + (i % 5) * 0.35}s`,
      opacity: 0.22 + (i % 4) * 0.08,
    };
  });

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
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
            animation: `sparkle-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            textShadow: "0 0 8px rgba(109,18,19,0.2)",
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
