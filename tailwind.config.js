/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        main: "#c84656",
        second: "#575657",
        third: "#ececee",
      },
    },
  },
  plugins: [require("tailwindcss-flip")],
};
