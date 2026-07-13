"use client";

const STARS = Array.from({ length: 56 }, (_, i) => {
  const col = i % 8;
  const row = Math.floor(i / 8);
  const jitterX = ((i * 19) % 13) - 6;
  const jitterY = ((i * 11) % 11) - 5;
  return {
    id: i,
    left: `${5 + col * 12 + jitterX}%`,
    top: `${6 + row * 12.5 + jitterY}%`,
    size: 18 + (i % 6) * 8,
    delay: `${(i % 10) * 0.22}s`,
    duration: `${2.6 + (i % 6) * 0.4}s`,
    opacity: 0.28 + (i % 5) * 0.1,
    rotate: (i * 23) % 40 - 20,
  };
});

/** Big twinkling star sparkles for the hero background. */
export default function HeroSparkles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {STARS.map((s) => (
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
            textShadow: "0 0 10px rgba(109,18,19,0.25)",
          }}
        >
          ✦
        </span>
      ))}
      {STARS.filter((_, i) => i % 4 === 0).map((s) => (
        <span
          key={`mini-${s.id}`}
          className="absolute select-none leading-none text-maroon-soft"
          style={{
            left: `calc(${s.left} + 4%)`,
            top: `calc(${s.top} + 5%)`,
            fontSize: 12 + (s.id % 3) * 4,
            opacity: 0.45,
            animation: `sparkle-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        >
          ✧
        </span>
      ))}
    </div>
  );
}
