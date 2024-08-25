/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '250px',  // Custom breakpoint for screens less than 640px
      },
    },
    
  },
  plugins: [  require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}