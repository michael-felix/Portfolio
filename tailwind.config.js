/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        "dark-surface": "#111111",
        "dark-card": "#161616",
        "dark-border": "#222222",
        cream: "#fafafa",
        "cream-muted": "#a3a3a3",
        muted: "#666666",
        accent: {
          DEFAULT: "#6EE7A0",
          glow: "#A7F3C9",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease forwards",
        slideUp: "slideUp 0.8s ease forwards",
        scaleIn: "scaleIn 0.8s ease forwards",
        slideDown: "slideDown 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
