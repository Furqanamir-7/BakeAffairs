import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2F0A0A",
        surface: "#4A1210",
        "surface-deep": "#3D0C0C",
        cream: "#F5E8E0",
        primary: "#6D1213",
        secondary: "#E78B67",
        maroon: {
          DEFAULT: "#6D1213",
          light: "#922A28",
          dark: "#4A0C0A",
          muted: "#5A1818",
        },
        peach: {
          DEFAULT: "#E78B67",
          light: "#FBC9A4",
          muted: "#C97860",
        },
        accent: "#FBC9A4",
        espresso: "#1A0404",
        parchment: "#E8D5CF",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        script: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(0, 0, 0, 0.45)",
        lift: "0 22px 50px -18px rgba(0, 0, 0, 0.55)",
        logo: "0 6px 20px -6px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        marble:
          "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(231,139,103,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 80% 20%, rgba(251,201,164,0.14) 0%, transparent 50%), radial-gradient(ellipse 55% 65% at 65% 85%, rgba(109,18,19,0.45) 0%, transparent 55%), radial-gradient(ellipse 45% 40% at 12% 72%, rgba(231,139,103,0.12) 0%, transparent 45%)",
        "maroon-wash":
          "linear-gradient(165deg, rgba(58,9,8,0.92) 0%, rgba(109,18,19,0.75) 40%, rgba(74,12,10,0.88) 100%)",
        "maroon-band":
          "linear-gradient(135deg, #6D1213 0%, #5A1515 35%, #4A0C0A 65%, #2F0A0A 100%)",
        "maroon-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(231,139,103,0.22) 0%, rgba(146,42,40,0.2) 40%, transparent 70%)",
        "peach-glow":
          "radial-gradient(ellipse 55% 45% at 85% 15%, rgba(251,201,164,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(231,139,103,0.15) 0%, transparent 55%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
