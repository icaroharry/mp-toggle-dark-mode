/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html"],
  theme: {
    extend: {
      animation: {
        moon: "moonGrow 0.2s linear 0.2s",
        sun: "sunGrow 0.2s linear 0.2s",
      },
      keyframes: {
        moonGrow: {
          "0%": { backgroundSize: "24px 24px" },
          "50%": { backgroundSize: "20px 20px" },
          "100%": { backgroundSize: "24px 24px" },
        },

        sunGrow: {
          "0%": { backgroundSize: "24px 24px" },
          "50%": { backgroundSize: "20px 20px" },
          "100%": { backgroundSize: "24px 24px" },
        },
      },
    },
  },
  plugins: [],
};
