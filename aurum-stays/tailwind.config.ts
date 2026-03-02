import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#C9A84C", light: "#E0C878", dark: "#A88B3C" },
        dark: { DEFAULT: "#0A0A0A", card: "#111111", lighter: "#1A1A1A" },
        cream: "#F5F0E8",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
