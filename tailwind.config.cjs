/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontFamily: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        "pmd-blue-50": "#eef1fa",
        "pmd-blue-100": "#d9e4ff",
        "pmd-blue-300": "#666a83",
        "pmd-blue-600": "#262a57",
        "pmd-blue-800": "#1e2140",
        "pmd-blue-900": "#151932",
        "pmd-red-600": "#f38a8b",
        "pmd-red-700": "#f87070",
      },
    },
  },
  plugins: [],
};
