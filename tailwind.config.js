/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        goldenrod: colors.goldenrod
    }
    },
    
  },
  plugins: [  require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}