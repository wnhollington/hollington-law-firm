import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js'

// Render
function Page({ data }) {
  const refs = data.contentfulPages.body?.references ?? []

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        const href = node.data.uri
        const internal = href?.startsWith('https://hollingtonlawfirm.')
        return (
          <a
            href={href}
            target={internal ? '_self' : '_blank'}
            rel={internal ? undefined : 'noopener noreferrer'}
          >
            {node.content?.[0]?.value ?? href}
          </a>
        )
      },

      // Only handle the types your Contentful field actually references:
      // ContentfulArticles and ContentfulAttorneys.
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const targetId = node.data?.target?.sys?.id
        const entry = refs.find(x => x.contentful_id === targetId)
        const label = node.content?.[0]?.value ?? 'Link'

        if (!entry?.internal?.type) return <span>{label}</span>

        switch (entry.internal.type) {
          case 'ContentfulArticles':
            return <Link to={`/articles/${entry.slug}`}>{label}</Link>
          case 'ContentfulAttorneys':
            // Adjust if your attorney route differs
            return <Link to={`/${entry.slug}`}>{label}</Link>
          default:
            return <span>{label}</span>
        }
      },
    },
  }

  return (
    <Layout pageTitle={data.contentfulPages.title}>
      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          <h1 className="bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-md shadow-xl">
            {data.contentfulPages.title}
          </h1>
          <div>{renderRichText(data.contentfulPages.body, options)}</div>
        </article>
        <Sidebar />
      </div>
    </Layout>
  )
}

// GraphQL — match the union exactly (Articles + Attorneys only)
export const query = graphql`
  query ($id: String!) {
    contentfulPages(id: { eq: $id }) {
      title
      seoTitle
      seoDescription
      slug
      body {
        raw
        references {
          ... on ContentfulArticles {
            contentful_id
            title
            slug
            internal { type }
          }
          ... on ContentfulAttorneys {
            contentful_id
            slug
            internal { type }
          }
        }
      }
    }
  }
`

export default Page

export const Head = ({ data }) => (
  <Seo
    title={data.contentfulPages.seoTitle}
    description={data.contentfulPages.seoDescription}
  />
)