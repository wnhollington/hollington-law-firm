import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types';

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js';

// Render
function Article ({ data, pageContext }) {
  const {previous, next} = pageContext
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
       return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>;
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = data.contentfulArticles.body.references.find(x => x.contentful_id === node.data.target.sys.id)
        const entryType = entry.internal.type === "ContentfulPracticeAreas" ? "practice-areas" : "articles"
        return <Link to={`/${entryType}/${entry.slug}`}>{node.content[0].value}</Link>;
      },
    }
  }
  return (
    <Layout>

      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          
          <header>
            <h1>{data.contentfulArticles.title}</h1>
            <p className='italic'>{data.contentfulArticles.seoDescription}</p>
          </header>
          
          {renderRichText(data.contentfulArticles.body, options)}
          
          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-between mx-auto my-4">
              <li>
                {previous && (
                  <Link to={`/articles/${previous.slug}`} rel="prev" aria-label={previous.title} title={previous.title} className="inline-flex items-center p-2 text-md font-medium no-underline text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    &larr; Previous Post
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/articles/${next.slug}`} rel="next" aria-label={next.title} title={next.title} className="inline-flex items-center p-2 text-md font-medium no-underline  text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    Next Post &rarr;
                  </Link>
                )}
              </li>
            </ul>
          </nav>

        </article>

        <Sidebar />

      </div>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulArticles(id: {eq: $id}) {
      title
      updatedAt(formatString: "MMM DD, YYYY")
      seoTitle
      seoDescription
      body {
        raw
        references {
          ... on ContentfulArticles {
            contentful_id
            title
            slug
            internal {
              type
            }
          }
          ... on ContentfulPracticeAreas {
            contentful_id
            title
            slug
            internal {
              type
            }
          }
        }
      }
    }
  }
`
export default Article

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulArticles.seoTitle}
    description={data.contentfulArticles.seoDescription}
  />
)