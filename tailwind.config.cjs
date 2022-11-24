/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {        
        bg: "#f5f6fa",
        white: "#ffffff",
        purple: "#5212bf",
        red: "#ff5858",
        blueDark: "#0e172c",
        greyLigth: "#d6d6d6",
        greyDark: "#888888",
        blackContent: "#3E4555"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};