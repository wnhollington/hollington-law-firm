const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME

const articleQuery = `{
    articles: allContentfulArticles {
        edges {
          node {
            id
            title
            seoDescription
            slug
            category {
              name
            }
            metadata {
              tags {
                name
              }
            }
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
      attributesForFaceting: [
        'searchable(metadata.tags.name)',
        'searchable(category.name)'
      ]
    },
  },
]

module.exports = queries