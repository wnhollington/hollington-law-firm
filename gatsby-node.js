
const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Templates
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const practiceAreaTemplate = path.resolve(`./src/templates/practice-area.js`)
  const typesOfProjectsTemplate = path.resolve(`./src/templates/types-of-projects.js`)
  const typesOfClaimsTemplate = path.resolve(`./src/templates/types-of-claims.js`)
  const articleTemplate = path.resolve(`./src/templates/article.js`)
  const attorneyBioTemplate = path.resolve(`./src/templates/attorney-bio.js`)
  const areasServedTemplate = path.resolve(`./src/templates/area-served.js`)

  const result = await graphql(`
    {
      pages: allContentfulPages {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      practiceAreas: allContentfulPracticeAreas {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      attorneys: allContentfulAttorneys{
        edges {
          node {
            id
            slug
          }
        }
      }
      articles: allContentfulArticles {
        edges {
          node {
            id
            slug
          }
        }
      }
      typesOfProjects: allContentfulTypesOfProjects {
        edges {
          node {
            id
            slug
          }
        }
      }
      typesOfClaims: allContentfulTypesOfClaims {
        edges {
          node {
            id
            slug
          }
        }
      }
      areasServed: allContentfulAreasServed {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // Create Pages
  const pages = result.data.pages.edges
  pages.forEach(page => {
    createPage({
      path: `${page.node.slug}`,
      component: require.resolve(pageTemplate),
      context: {
        title: page.node.title,
        id: page.node.id,
        slug: page.node.slug
      },
    })
  })

  // Create Practice Area Pages
  const practiceAreas = result.data.practiceAreas.edges
  practiceAreas.forEach(practiceArea => {
    createPage({
      path: `/practice-areas/${practiceArea.node.slug}`,
      component: require.resolve(practiceAreaTemplate),
      context: {
        title: practiceArea.node.title,
        id: practiceArea.node.id,
        slug: practiceArea.node.slug
      },
    })
  })

  // Create Types of Projects Pages
  const typesOfProjects = result.data.typesOfProjects.edges
  typesOfProjects.forEach(project => {
    createPage({
      path: `/types-of-projects/${project.node.slug}`,
      component: require.resolve(typesOfProjectsTemplate),
      context: {
        title: project.node.title,
        id: project.node.id,
        slug: project.node.slug
      },
    })
  })

  // Create Types of Claims Pages
  const typesOfClaims = result.data.typesOfClaims.edges
  typesOfClaims.forEach(claim => {
    createPage({
      path: `/types-of-claims/${claim.node.slug}`,
      component: require.resolve(typesOfClaimsTemplate),
      context: {
        title: claim.node.title,
        id: claim.node.id,
        slug: claim.node.slug
      },
    })
  })


  // Create Articles and Pagination
  const articles = result.data.articles.edges
  articles.forEach((article, index) => {
      // Create prev and next pages
      const previous = index === articles.length - 1 ? null: articles[index + 1].node
      const next = index === 0 ? null : articles[index - 1].node
      // Previous and next are object props sent as pageContext object to articleTemplate
      createPage({
          path: `/articles/${article.node.slug}`,
          component: require.resolve(articleTemplate),
          context: {
              id: article.node.id,
              slug: article.node.slug,
              previous,
              next,
          },
      })
  })

  // Create Attorney Bios
  const attorneys = result.data.attorneys.edges
  attorneys.forEach(attorney => {
    createPage({
      path: `${attorney.node.slug}`,
      component: require.resolve(attorneyBioTemplate),
      context: {
        id: attorney.node.id,
        slug: attorney.node.slug
      },
    })
  })

  // Create Areas Served Pages
  const areasServed = result.data.areasServed.edges
  areasServed.forEach(area => {
    createPage({
      path: `/areas-served/${area.node.slug}`,
      component: require.resolve(areasServedTemplate),
      context: {
        id: area.node.id,
        slug: area.node.slug
      },
    })
  })

};

// Add Reading Time to Articles
const readingTime = require("reading-time");
const { documentToPlainTextString } =
  require("@contentful/rich-text-plain-text-renderer");

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    // 1️⃣  100 % match your node typename
    ContentfulArticles: {
      // 2️⃣  new GraphQL field
      readingTime: {
        type: "Int",
        resolve(source) {
          /* -------------------------------------------
           *  Extract plain text from body.raw (Rich Text)
           * ------------------------------------------- */
          let text = "";

          if (source.body && source.body.raw) {
            text = documentToPlainTextString(JSON.parse(source.body.raw));
          }

          // Fallback keeps field from being pruned
          if (!text) return 1;

          // reading‑time returns { minutes, words }
          return Math.ceil(readingTime(text).minutes);
        },
      },
    },
  });
};