import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js'

// Render
function Page({ data }) {
  return (
    <Layout pageTitle={data.contentfulPages.title}>
      <div className='flex flex-col md:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='md:w-2/3 max-w-6xl'>
          <h1 className="text-center">{data.contentfulPages.title}</h1>
          <div>{renderRichText(data.contentfulPages.body)}</div>
        </article>
        <Sidebar/>
      </div>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulPages(id: {eq: $id}) {
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
export default Page

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulPages.seoTitle}
    description={data.contentfulPages.seoDescription}
  />
)