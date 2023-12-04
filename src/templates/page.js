import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'

// Render
function Page({ data }) {
  return (
    <Layout pageTitle={data.contentfulPages.title}>
      <article className='max-w-5xl my-8 p-4 xl:p-0 mx-auto'>
        <h1 className="text-center">{data.contentfulPages.title}</h1>
        <div>{renderRichText(data.contentfulPages.body)}</div>
      </article>
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