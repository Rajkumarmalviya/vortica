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
        sans: ["Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        background: "#0a0a0a",
        surface: {
          DEFAULT: "#111111",
          raised: "#1a1a1a",
          overlay: "rgba(255,255,255,0.04)",
        },
        foreground: {
          DEFAULT: "#ffffff",
          muted: "#a1a1aa",
          subtle: "#52525b",
        },
        primary: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.16)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139,92,246,0.12), transparent)",
      },
    },
  },
  plugins: [],
};
