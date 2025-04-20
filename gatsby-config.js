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
    description: 'Colorado Construction Defect Lawyer',
    tagline: `Helping Home and Property Owners Statewide`,
    siteUrl: `https://hollingtonlawfirm.com`,
    contact: {
      phone: "(303) 276-2647",
      email: "info@hollingtonlawfirm.com",
      address: {
        street: "11479 S Pine Dr., ",
        city: " Parker, Colorado 80134"
      },
    },
    social: {
      facebook: `https://www.facebook.com/profile.php?id=61556212625817`,
      linkedin: `https://www.linkedin.com/company/hollington-law-firm/`,
      twitter: `https://twitter.com/wnealhollington`,
    }
  },
  plugins: 
  [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Hollington Law Firm",
        description: "Colorado Construction Defect Lawyer",
        lang: "en",
        background_color: "#e7e5e4",
        theme_color: "#6E0A05",
        icon: "src/images/web-icon.png",
        icon_options: {
          purpose: "any maskable"
        }
      }
    }, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          // remove "avif" here
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
        },
      },
    },
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utilities/algolia-queries")
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
  ],

};

