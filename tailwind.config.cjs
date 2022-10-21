/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./main.js",
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'divinablue': '#03045e',
      },
    },
  },
  plugins: [],
}