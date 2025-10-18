import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js'

// Render
function Page({ data }) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
       return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>;
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = data.contentfulPracticeAreas.body.references.find(x => x.contentful_id === node.data.target.sys.id)
        switch (entry.internal.type) {
          case 'ContentfulAttorneys':
            return <Link to={`/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulArticles':
            return <Link to={`/articles/${entry.slug}`}>{node.content[0].value}</Link>;
          default:
            return <Link to={`/`}>{node.content[0].value}</Link>;
        }
      }
    }
  }
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          <h1 className="bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-md shadow-xl">{data.contentfulPracticeAreas.seoTitle}</h1>
          {data.contentfulPracticeAreas.heroImage?.gatsbyImageData && (
            <div className="relative mb-6 rounded shadow-md overflow-hidden" style={{ height: '60vh' }}>
              <GatsbyImage
                image={getImage(data.contentfulPracticeAreas.heroImage)}
                alt={data.contentfulPracticeAreas.heroImage.description || 'Hero image'}
                loading="eager"
                fetchpriority="high"
                className="w-full h-full"
                imgStyle={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
            </div>
          )}
          <div>{renderRichText(data.contentfulPracticeAreas.body, options)}</div>
        </article>
        <Sidebar />
      </div>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulPracticeAreas(id: {eq: $id}) {
      title
      seoTitle
      seoDescription
      slug
      heroImage {
        gatsbyImageData (
          layout: FULL_WIDTH
        )
        description
      }
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
          ... on ContentfulAttorneys {
            contentful_id
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
export default Page

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulPracticeAreas.seoTitle}
    description={data.contentfulPracticeAreas.seoDescription}
  />
)