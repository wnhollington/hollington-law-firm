import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import BlockContent from "@sanity/block-content-to-react"

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Schedule from "../components/sections/schedule.js"

// Render
function Post ({ data, pageContext }) {
  const {previous, next} = pageContext
  return (
    <Layout pageTitle={data.sanityPost.title}>

      <article className='max-w-5xl mt-8 p-4 md:mx-auto'>
        <header className='text-center'>
          <h1>{data.sanityPost.title}</h1>
          <GatsbyImage image={data.sanityPost.featured_image.asset.gatsbyImageData} alt={data.sanityPost.title}/>
          <p className='italic'>{data.sanityPost.description}</p>
        </header>
        <BlockContent blocks={data.sanityPost._rawContent} />
      </article>

      {/* Navigation */}
      <nav className="max-w-5xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between mx-auto my-4">
          <li>
            {previous && (
              <Link to={`/${previous.slug.current}`} rel="prev" aria-label={previous.title} title={previous.title} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center gap-4">&larr; Previous Post</h3>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug.current}`} rel="next" aria-label={next.title} title={next.title} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
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
    sanityPost(_id: {eq: $id}) {
      title
      _createdAt(formatString: "MMM DD, YYYY")
      description
      featured_image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      _rawContent
    }
  }
`
export default Post

export const Head = ({data}) => (
  <Seo 
    title={data.sanityPost.title}
    description={data.sanityPost.description}
  />
)