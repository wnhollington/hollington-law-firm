import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js'

function TypesOfProjects({ data }) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>
      }
    }
  }

  return (
    <Layout>
      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          <h1 className="bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-md shadow-xl">
            {data.contentfulTypesOfProjects.title}
          </h1>

          {data.contentfulTypesOfProjects.heroImage?.gatsbyImageData && (
            <div className="relative mb-6 rounded shadow-md overflow-hidden" style={{ height: '60vh' }}>
              <GatsbyImage
                image={getImage(data.contentfulTypesOfProjects.heroImage)}
                alt={data.contentfulTypesOfProjects.heroImage.description || 'Hero image'}
                loading="eager"
                fetchpriority="high"
                className="w-full h-full"
                imgStyle={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
            </div>
          )}

          <div>{renderRichText(data.contentfulTypesOfProjects.body, options)}</div>
        </article>
        <Sidebar />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    contentfulTypesOfProjects(id: {eq: $id}) {
      title
      seoTitle
      seoDescription
      slug
      heroImage {
        gatsbyImageData(
          layout: FULL_WIDTH
        )
        description
      }
      body {
        raw
      }
    }
  }
`

export default TypesOfProjects

export const Head = ({ data }) => (
  <Seo 
    title={data.contentfulTypesOfProjects.seoTitle}
    description={data.contentfulTypesOfProjects.seoDescription}
  />
)