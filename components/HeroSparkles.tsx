"use client";

const COLORS = [
  "#6D1213",
  "#922A28",
  "#C45A5A",
  "#E8C5C0",
  "#F5E0DC",
  "#D4A8A2",
  "#8B3A3C",
];

/** Deterministic sprinkle field — big capsule sprinkles across the hero. */
const SPRINKLES = Array.from({ length: 72 }, (_, i) => {
  const col = i % 9;
  const row = Math.floor(i / 9);
  const jitterX = ((i * 17) % 11) - 5;
  const jitterY = ((i * 13) % 9) - 4;
  return {
    id: i,
    left: `${6 + col * 11 + jitterX}%`,
    top: `${4 + row * 11.5 + jitterY}%`,
    w: 10 + (i % 5) * 4,
    h: 28 + (i % 6) * 6,
    rotate: -55 + ((i * 37) % 110),
    color: COLORS[i % COLORS.length],
    delay: `${(i % 12) * 0.18}s`,
    duration: `${3.2 + (i % 7) * 0.35}s`,
    opacity: 0.35 + (i % 5) * 0.1,
  };
});

export default function HeroSparkles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {SPRINKLES.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full shadow-[0_2px_6px_rgba(109,18,19,0.12)]"
          style={{
            left: s.left,
            top: s.top,
            width: s.w,
            height: s.h,
            backgroundColor: s.color,
            opacity: s.opacity,
            transform: `rotate(${s.rotate}deg)`,
            animation: `sparkle-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}

      {/* Extra chunky round “candy” sprinkles */}
      {SPRINKLES.filter((_, i) => i % 3 === 0).map((s) => (
        <span
          key={`dot-${s.id}`}
          className="absolute rounded-full"
          style={{
            left: `calc(${s.left} + 2.5%)`,
            top: `calc(${s.top} + 3%)`,
            width: 12 + (s.id % 4) * 4,
            height: 12 + (s.id % 4) * 4,
            backgroundColor: COLORS[(s.id + 2) % COLORS.length],
            opacity: 0.4,
            animation: `sparkle-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
