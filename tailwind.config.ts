import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF6F1",
        primary: "#C4956A",
        secondary: "#8B5E3C",
        accent: "#E8D5B7",
        espresso: "#3B2314",
        parchment: "#F0E6D6",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        script: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(59, 35, 20, 0.18)",
        lift: "0 22px 50px -18px rgba(59, 35, 20, 0.32)",
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
