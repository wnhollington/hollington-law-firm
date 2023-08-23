
const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const result = await graphql(`
    query pageQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
        }
    }
  `)
  result.data.allMdx.edges.forEach(edge => {
    createPage({
      path: `${edge.node.frontmatter.slug}`,
      component: `${pageTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      context: {
        title: edge.node.frontmatter.title,
        id: edge.node.id,
        slug: edge.node.frontmatter.id
      },
    })
  })
}