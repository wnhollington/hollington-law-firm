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
        "path": "./src/content/pages"
      },
      __key: "mdx-pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./src/content/posts"
      },
      __key: "posts"
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
  ]
};