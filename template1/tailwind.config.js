/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {    
    extend: {
      fontFamily: {
        'martian': ['Martian Mono', 'monospace'],
        'cedarville': ['Cedarville Cursive', 'cursive'],
        'fuggles': ['Fuggles', 'cursive']
      },
    },
  },
  plugins: [],
}
