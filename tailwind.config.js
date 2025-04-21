const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/wnhollington/image/upload/f_auto/q_auto/e_improve,e_sharpen/v1710770792/7.19.23-Construction-Defect_zzkg4q.compress_aforwx.webp')",
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
    require('flowbite/plugin'),
    'gatsby-plugin-postcss',
  ],
}
