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
      }
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
                  <Link to={`/${previous.slug}`} rel="prev" aria-label={previous.title} title={previous.title} className="inline-flex items-center p-2 text-sm font-medium no-underline text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <h3 className="flex items-center gap-4">&larr; Previous Post</h3>
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/${next.slug}`} rel="next" aria-label={next.title} title={next.title} className="inline-flex items-center p-2 text-sm font-medium no-underline  text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    <h3 className="flex items-center justify-right gap-4">Next Post &rarr;</h3>
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