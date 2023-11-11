import * as React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Schedule from "../components/sections/schedule.js"

// Render
function Page({ data }) {
  return (
    <Layout pageTitle={data.sanityPracticeArea.title}>
      <article className='max-w-5xl my-8 p-4 xl:p-0 mx-auto'>
        <h1 className="text-center">{data.sanityPracticeArea.title}</h1>
        <BlockContent blocks={data.sanityPracticeArea._rawContent} />
      </article>
      <Schedule/>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    sanityPracticeArea(_id: {eq: $id}) {
      title
      slug {
        current
      }
      _rawContent
    }
  }
`
export default Page

export const Head = ({data}) => (
  <Seo 
    title={data.sanityPracticeArea.title}
  />
)