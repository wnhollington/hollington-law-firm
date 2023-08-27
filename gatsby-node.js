
const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Templates
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)

  const result = await graphql(`
    {
      pages: allMdx(filter: {frontmatter: {type: {eq: "page"}}}) {
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
      posts: allMdx(filter: {frontmatter: {type: {eq: "post"}}}) {
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

  // Create Pages
  const pages = result.data.pages.edges
  pages.forEach(page => {
    createPage({
      path: `${page.node.frontmatter.slug}`,
      component: `${pageTemplate}?__contentFilePath=${page.node.internal.contentFilePath}`,
      context: {
        title: page.node.frontmatter.title,
        id: page.node.id,
        slug: page.node.frontmatter.id
      },
    })
  })

  // Create Posts and Pagination
  const posts = result.data.posts.edges
  posts.forEach((post, index) => {
      // Create prev and next pages
      const previous = index === posts.length - 1 ? null: posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      // Previous and next are object props sent as pageContext object to articleTemplate
      createPage({
          path: `/${post.node.frontmatter.slug}`,
          component: `${postTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
          context: {
              slug: post.node.frontmatter.slug,
              id: post.node.id,
              previous,
              next,
          },
      })
  })
}