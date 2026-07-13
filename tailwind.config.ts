import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF6F2",
        surface: "#FFFFFF",
        "surface-soft": "#F3EBE4",
        "surface-deep": "#EDE2DB",
        cream: "#FAF6F2",
        ink: "#3A1520",
        primary: "#6D1213",
        secondary: "#6D1213",
        maroon: {
          DEFAULT: "#6D1213",
          light: "#922A28",
          soft: "#C45A5A",
          dark: "#4A0C0A",
          muted: "#8B3A3C",
          blush: "#E8C5C0",
        },
        peach: {
          DEFAULT: "#E8C5C0",
          light: "#F5E0DC",
          muted: "#D4A8A2",
        },
        accent: "#922A28",
        espresso: "#3A1520",
        parchment: "#F0E6DE",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        script: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 12px 36px -16px rgba(109, 18, 19, 0.22)",
        lift: "0 22px 48px -18px rgba(109, 18, 19, 0.28)",
        logo: "0 8px 24px -10px rgba(109, 18, 19, 0.28)",
      },
      backgroundImage: {
        marble:
          "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(232,197,192,0.45) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 80% 20%, rgba(109,18,19,0.06) 0%, transparent 50%), radial-gradient(ellipse 55% 65% at 65% 85%, rgba(232,197,192,0.35) 0%, transparent 55%)",
        "maroon-wash":
          "linear-gradient(165deg, #FAF6F2 0%, #F5EBE4 45%, #F0E0DC 100%)",
        "maroon-band":
          "linear-gradient(135deg, #6D1213 0%, #5A1515 40%, #4A0C0A 100%)",
        "maroon-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,197,192,0.55) 0%, rgba(109,18,19,0.06) 45%, transparent 70%)",
        "peach-glow":
          "radial-gradient(ellipse 55% 45% at 85% 15%, rgba(232,197,192,0.5) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(109,18,19,0.06) 0%, transparent 55%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "loader-dot": {
          "0%, 80%, 100%": { opacity: "0.25", transform: "translateY(0)" },
          "40%": { opacity: "1", transform: "translateY(-5px)" },
        },
        "motif-drift": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(4deg)" },
        },
        "shop-scroll": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "shop-scroll-reverse": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        // Softer ease-in-out drift that reverses (unlike shop's linear loop)
        "reviews-drift": {
          "0%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-42%) scale(1.01)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "reviews-drift-reverse": {
          "0%": { transform: "translateY(-42%) scale(1)" },
          "50%": { transform: "translateY(0) scale(1.01)" },
          "100%": { transform: "translateY(-42%) scale(1)" },
        },
        "sparkle-twinkle": {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "loader-dot": "loader-dot 1.1s ease-in-out infinite",
        "motif-drift": "motif-drift 5.5s ease-in-out infinite",
        "shop-scroll": "shop-scroll linear infinite",
        "shop-scroll-reverse": "shop-scroll-reverse linear infinite",
        "reviews-drift": "reviews-drift ease-in-out infinite",
        "reviews-drift-reverse": "reviews-drift-reverse ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
