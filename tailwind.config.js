/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo-aside': '#FAFBFD',
        'dev': '#F7542E',
        'challenges.io': '#090F31',
        'navegacion': '#9E9E9E',
        'footer': '#A9A9A9',
        'tittle-buttons': '#4F4F4F'
      },
    },
  },
  plugins: [],
}

