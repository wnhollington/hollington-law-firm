const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../images/homepage-hero-background-img.jpg')"
      },
      colors: {
        primary: "#6E0A05",
        secondary: "#767769"
      },
    },
  },
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
}
