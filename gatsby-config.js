/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `Altitude Injury Law`,
    description: 'Colorado Personal Injury Law Firm',
    tagline: `For the People of Colorado`,
    siteUrl: `https://altitudeinjurylaw.com`,
    contact: {
      phone: "",
      email: ""
    },
    social: {
      facebook: ` `,
      youtube: ` `,
      instagram: ` `,
      twitter: ` `,
    }
  },
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtm.js?id=${process.env.GA_TRACKING_ID}`,
    `https://www.google-analytics.com/analytics.js`,
  ],
  plugins: 
  [
      "gatsby-plugin-image", 
      "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/web-icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: true,
        overlayDrafts: true,
      },
    },    
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`
        }
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
  ],

};