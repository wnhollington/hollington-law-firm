/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Colorado Construction Attorney`,
    tagline: `W. Neal Hollington`,
    siteUrl: `https://hollington.law`,
    description: ``,
    contact: {
      phone: "",
      email: ""
    },
    social: {
      facebook: ``,
      youtube: ``,
      instagram: ``,
    }
  },
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
    "gatsby-plugin-mdx", 
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
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx-pages",
        "path": "./src/content/"
      },
      __key: "mdx-pages"
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`
        }
      }
    },
    // {
    //   resolve: `gatsby-source-google-reviews-en`,
    //   options: {
    //     placeId: process.env.GOOGLE_PLACES_ID,
    //     apiKey: process.env.GOGGLE_API_KEY,
    //   },
    // },
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       process.env.GA_TRACKING_ID
    //     ],
    //     gtagConfig: {
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     pluginConfig: {
    //       head: false,
    //       respectDNT: true,
    //     },
    //   },
    // },
  ]
};