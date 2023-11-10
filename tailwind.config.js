const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/wnhollington/image/upload/v1699606613/fwc3pmbkdm0xdmvpzmkc.webp')",
        'herringbone': "url('https://res.cloudinary.com/wnhollington/image/upload/v1699606613/pijwvmzqmulmxpocc3iq.webp')"
      },
      colors: {
        primary: "#6E0A05",
        secondary: "#055b6e"
      },
    },
    listStyleType: {
      circle: 'circle',
      disc: 'disc',
      decimal: 'decimal'
    }
  },
  plugins: [
    require('./node_modules/flowbite/plugin'),
    'gatsby-plugin-postcss',
  ],
}
