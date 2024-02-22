const indexName = `Articles`

const articleQuery = `{
    articles: allContentfulArticles {
        edges {
          node {
            id
            title
            seoDescription
            slug
          }
        }
      }
}`

function pageToAlgoliaRecord({ node: { id, ...rest } }) {
  return {
    objectID: id,
    ...rest
  }
}

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) => data.articles.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: {
      attributesForFaceting: [`tags`],
      // attributesToSnippet: [`description:20`],
    },
  },
]

module.exports = queries