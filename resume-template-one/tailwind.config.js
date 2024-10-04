/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'Georgia'],
      'ptsans' : ['PT Sans', 'sans-serif'],
      'ptsans-narrow' : ['PT Sans Narrow', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

