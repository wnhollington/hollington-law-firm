import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types';

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js'

// Render
function TypesOfProjects({ data }) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
       return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>;
      },
    }
  }
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          <h1 className="bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-md shadow-xl">{data.contentfulTypesOfProjects.title}</h1>
          <div>{renderRichText(data.contentfulTypesOfProjects.body, options)}</div>
        </article>
        <Sidebar />
      </div>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulTypesOfProjects(id: {eq: $id}) {
      title
      seoTitle
      seoDescription
      slug
      body {
        raw
      }
    }
  }
`
export default TypesOfProjects

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulTypesOfProjects.seoTitle}
    description={data.contentfulTypesOfProjects.seoDescription}
  />
)