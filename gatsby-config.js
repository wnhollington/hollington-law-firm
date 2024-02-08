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
    description: 'Civil Litigation Attorney',
    tagline: `Your Story Matters`,
    siteUrl: `https://hollingtonlawfirm.com`,
    contact: {
      phone: "(303) 276-2647",
      email: "nhollington@hollingtonlawfirm.com",
      address: {
        street: "11479 S Pine Dr., ",
        city: " Parker, Colorado 80134"
      },
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
        name: "Hollington Law Firm",
        description: "Colorado Civil Litigation Attorney",
        lang: "en",
        background_color: "#e7e5e4",
        theme_color: "#6E0A05",
        icon: "src/images/web-icon.png",
        icon_options: {
          purpose: "any maskable"
        }
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

