
const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Templates
  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const practiceAreaTemplate = path.resolve(`./src/templates/practice-area.js`)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const attorneyBioTemplate = path.resolve(`./src/templates/attorney-bio.js`)

  const result = await graphql(`
    {
      pages: allSanityPage {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
      practiceAreas: allSanityPracticeArea {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
      posts: allSanityPost {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
      attorneys: allSanityAttorney {
        edges {
          node {
            _id
            slug {
              current
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
      path: `${page.node.slug.current}`,
      component: require.resolve(pageTemplate),
      context: {
        title: page.node.title,
        id: page.node._id,
        slug: page.node.slug.current
      },
    })
  })

  // Create Practice Area Pages
  const practiceAreas = result.data.practiceAreas.edges
  practiceAreas.forEach(practiceArea => {
    createPage({
      path: `${practiceArea.node.slug.current}`,
      component: require.resolve(practiceAreaTemplate),
      context: {
        title: practiceArea.node.title,
        id: practiceArea.node._id,
        slug: practiceArea.node.slug.current
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
          path: `${post.node.slug.current}`,
          component: require.resolve(postTemplate),
          context: {
              id: post.node._id,
              slug: post.node.slug.current,
              previous,
              next,
          },
      })
  })

  // Create Attorney Bios
  const attorneys = result.data.attorneys.edges
  attorneys.forEach(attorney => {
    createPage({
      path: `${attorney.node.slug.current}`,
      component: require.resolve(attorneyBioTemplate),
      context: {
        id: attorney.node._id,
      },
    })
  })

}