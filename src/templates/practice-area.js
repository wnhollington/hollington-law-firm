import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Schedule from "../components/sections/schedule.js"

// Render
function Page({ data }) {
  return (
    <Layout>
      <article className='max-w-5xl my-8 p-4 xl:p-0 mx-auto'>
        <h1 className="text-center">{data.contentfulPracticeAreas.title}</h1>
        <div>{renderRichText(data.contentfulPracticeAreas.body)}</div>
      </article>
      <Schedule/>
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
      body {
        raw
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