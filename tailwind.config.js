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
        'hero': "url('https://images.ctfassets.net/irf9uehwbpr8/bTPzPfEGlBHQKCkWmp1ko/c1210cb73b39adb255b91097e695dcfc/hero-image.webp')",
        'landing-construction-defect': "url('https://res.cloudinary.com/wnhollington/image/upload/v1709567312/landing-page-construction-defects_li55eh.jpg')",
        'landing-non-compete': "url('https://res.cloudinary.com/wnhollington/image/upload/v1710344512/non-compete_2_rdlroj.jpg')"
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
