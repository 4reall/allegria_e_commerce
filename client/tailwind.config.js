// /** @type {import("tailwindcss").Config} */

const theme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#254A5A",
        "primary-dark": "#0F303F",
        beige: "#EAE9E8",
        accent: "#E64926",
        error: colors.red["500"],
        "beige-dark": "#CEC6C4",
        gray: "#B7C1C5",
      },

      fontFamily: {
        decor: ["Cormorant Garamond", "serif"],
        normal: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      extend: {
        fontSize: {
          xxs: ["0.625rem", "0.875rem"],
          xs: ["0.75rem", 1],
          sm: ["0.875rem", "1.25rem"],
          md: ["1rem", "1.375rem"],
          lg: ["1.125rem", "1.5625rem"],
          xl: ["1.25rem", "1.5rem"],
          "2xl": ["1.5625rem", "2.125rem"],
          "3xl": ["1.875rem", 1],
          "4xl": ["5.625rem", 1],
        },
      },
      keyframes: {
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-radix")],
};
