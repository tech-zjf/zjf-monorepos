/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      gridTemplateColumns: {},
      ringWidth: {},
      screens: {},
      colors: {
        red: "#FF2E00",
        yellow: "#FFB200",
        green: "#00C259",
        "gray-bg": "#F7F7F7",
        cyan: "#3DDBD1",
        "new-cyan": "#3DDBD1",
        "darker-cyan": "#1E8E9D",
        blue: "#5283F0",
        "green-cell": "#33A145",
        orange: "#FF5430",
        border: "#1d1d1d",
        gold: "#FFAE00",
        "dark-gray": "#222427",
        "dark-bg": "#141414",
        "bright-blue": "#2367FF",
        "app-green": "rgba(61, 219, 209, 1)",
        gray: {
          100: "#F6F8FB",
          200: "#EEF0F3",
          300: "#E6E7EB",
          400: "#D5DBE4",
          500: "#B3BAC8",
          600: "#838D9E",
          700: "#656E82",
          800: "#475368",
          333: "#333",
          999: "#999",
          900: "#152137",
        },
      },
      opacity: {},
      inset: {},
      width: {},
      height: {},
      borderWidth: {},
      leading: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
