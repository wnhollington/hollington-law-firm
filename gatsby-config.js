/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: `Hollington Law Firm`,
    description: 'Denver Trial Lawyer',
    tagline: `For the people, not the powerful`,
    siteUrl: `https://hollingtonlawfirm.com`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
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

