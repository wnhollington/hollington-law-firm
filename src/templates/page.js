import * as React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'

// Render
function Page({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article className='max-w-3xl m-4 md:mx-auto'>
        <h1 className="text-center">{data.mdx.frontmatter.title}</h1>
        {children}
      </article>
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