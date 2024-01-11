import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types';

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Schedule from "../components/sections/schedule.js"

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

      <article className='max-w-5xl mt-8 p-4 mx-auto'>
        <header className='text-center'>
          <h1>{data.contentfulArticles.title}</h1>
          <img src={data.contentfulArticles.featuredImage[0].secure_url} alt={data.contentfulArticles.title} className='w-full'/>
          <p className='italic'>{data.contentfulArticles.seoDescription}</p>
        </header>
        {renderRichText(data.contentfulArticles.body, options)}
      </article>

      {/* Navigation */}
      <nav className="max-w-5xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between mx-auto my-4">
          <li>
            {previous && (
              <Link to={`/${previous.slug}`} rel="prev" aria-label={previous.title} title={previous.title} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center gap-4">&larr; Previous Post</h3>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug}`} rel="next" aria-label={next.title} title={next.title} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center justify-right gap-4">Next Post &rarr;</h3>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Consultation */}
      <Schedule/>
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
      featuredImage {
        secure_url
      }
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