import * as React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Schedule from "../components/sections/schedule"

// Render
function Page({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className='max-w-5xl m-2 p-4 xl:p-0 mx-auto'>
        <h1 className="text-center">{data.mdx.frontmatter.title}</h1>
        {children}
      </article>

      {/* Schedule */}
      {
        data.mdx.frontmatter.title !== "Disclaimer" & data.mdx.frontmatter.title !== "Privacy Policy" && <Schedule />
      }
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
        }
    }
  }
`
export default Page

export const Head = ({data}) => (
  <Seo 
    title={data.mdx.frontmatter.title}
  />
)