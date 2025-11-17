/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();

module.exports = {
  /* ------------------------------------------------------------------ */
  /*   FLAGS & TYPEGEN                                                   */
  /* ------------------------------------------------------------------ */
  flags: {
    DEV_SSR: true,
    PARALLEL_DATA_SOURCING: true,   // faster Contentful ingest
  },
  graphqlTypegen: process.env.NODE_ENV === 'production',             // typed GraphQL queries in IDE

  /* ------------------------------------------------------------------ */
  /*   SITE  METADATA  (unchanged)                                       */
  /* ------------------------------------------------------------------ */
  siteMetadata: {
    title: `Hollington Law Firm: Colorado Construction Defect Attorney`,
    description: 'Colorado Construction Defect Attorney',
    tagline: `Protecting homeowners from construction negligence`,
    siteUrl: `https://hollingtonlawfirm.com`,
    contact: {
      phone: "(303) 276-2647",
      email: "info@hollingtonlawfirm.com",
      address: {
        street: "9800 Pyramid Ct, Suite 4024, ",
        city: " Englewood, Colorado 80112"
      },
    },
    social: {
      facebook: `https://www.facebook.com/people/Hollington-Law-Firm-LLC/61556212625817/`,
      linkedin: `https://www.linkedin.com/company/hollington-law-firm/`,
      twitter: `https://x.com/wnealhollington`,
    }
  },

  /* ------------------------------------------------------------------ */
  /*   PLUG‑IN STACK                                                     */
  /* ------------------------------------------------------------------ */
  plugins: [
    /* ---------------- GLOBAL IMAGE DEFAULTS -------------------------- */
    {
      resolve: `gatsby-plugin-image`,
      options: {
        // These apply to EVERY gatsbyImageData() call unless you override.
        defaults: {
          // Performance‑friendly placeholder for heroes / LCP elements
          placeholder: `dominantColor`,
          // Ship next‑gen formats first; JPEG/PNG fallbacks auto
          formats: [`auto`, `webp`],
          // Good visual fidelity at ~80 % of original weight
          quality: 80,
          // Sensible responsive breakpoints for laptops → 4K
          breakpoints: [480, 768, 1024, 1360, 1920],
          backgroundColor: `transparent`,
        },
      },
    },

    /* ------------- SHARP (for local assets like logos) --------------- */
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          formats: [`auto`, `webp`],
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,

    /* -------------------- CONTENTFUL SOURCE -------------------------- */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:     process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags:  true,
        // Leave originals on Contentful’s CDN; use Image API transforms
        downloadLocal: false,
      },
    },

    /* --------------------- PWA / MANIFEST ---------------------------- */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hollington Law Firm',
        description: 'Colorado Construction Defect Lawyer',
        lang: 'en',
        background_color: '#e7e5e4',
        theme_color: '#6E0A05',
        icon: 'src/images/web-icon.png',
        icon_options: { purpose: 'any maskable' },
      },
    },

    /* ---------------------- DATA & ASSETS ---------------------------- */
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: './src/images/' },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'pages', path: './src/pages/' },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: { include: `${__dirname}/src/images/svg` },
      },
    },

    /* ----------------------- SITEMAP --------------------------------- */
    `gatsby-plugin-sitemap`,

    /* ------------------- PERF / ANALYTICS ---------------------------- */
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: { devMode: false },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId:  process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require('./src/utilities/algolia-queries'),
      },
    },

    /* ----------------------- STYLES ---------------------------------- */
    'gatsby-plugin-postcss',
  ],
};