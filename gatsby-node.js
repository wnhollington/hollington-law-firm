
const path = require(`path`)

// Partytown
const { copyLibFiles } = require('@builder.io/partytown/utils');

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, "static", "~partytown"));
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Templates
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const practiceAreaTemplate = path.resolve(`./src/templates/practice-area.js`)
  const articleTemplate = path.resolve(`./src/templates/article.js`)
  const attorneyBioTemplate = path.resolve(`./src/templates/attorney-bio.js`)

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

}