/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        background: "#000000",
        surface: "#090A14",
        card: "#0E1020",
        foreground: {
          DEFAULT: "#ffffff",
          muted: "rgba(255,255,255,0.75)",
          subtle: "rgba(255,255,255,0.45)",
        },
        primary: {
          DEFAULT: "#5B6BC4",
          hover: "#6B7DD4",
          light: "#A0AFFF",
          deep: "#3B3F8C",
        },
        border: {
          DEFAULT: "rgba(160,175,255,0.15)",
          strong: "rgba(160,175,255,0.3)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at center, rgba(91,107,196,0.35), transparent 60%)",
        "brand-gradient": "linear-gradient(90deg, #5B6BC4, #A0AFFF)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(160,175,255,0.15)",
        "glow":    "0 0 25px rgba(160,175,255,0.25)",
        "glow-lg": "0 0 40px rgba(91,107,196,0.45)",
      },
    },
  },
  plugins: [],
};
