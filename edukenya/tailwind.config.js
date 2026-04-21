/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#07070a",
          900: "#0b0b10",
          800: "#14141c",
          700: "#1c1c28",
          600: "#2a2a3a",
        },
        accent: {
          DEFAULT: "#d4af37",
          soft: "#e8c873",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,175,55,0.35), 0 20px 60px -20px rgba(212,175,55,0.35)",
      },
    },
  },
  plugins: [],
};
