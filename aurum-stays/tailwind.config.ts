import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#D4A843", light: "#E8C97A", dark: "#B8922F" },
        dark: { DEFAULT: "#111217", light: "#1A1B23", lighter: "#23242F", card: "#16171F" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s infinite",
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeInUp: { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        scaleIn: { "0%": { opacity: "0", transform: "scale(0.9)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "pulse-gold": { "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,168,67,0.3)" }, "50%": { boxShadow: "0 0 0 15px rgba(212,168,67,0)" } },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4A843 0%, #E8C97A 40%, #D4A843 60%, #B8922F 100%)",
        "dark-gradient": "linear-gradient(180deg, #111217 0%, #16171F 100%)",
        "radial-gold": "radial-gradient(ellipse at center, rgba(212,168,67,0.08) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;