import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'

// Render
function Post ({ data, children, pageContext }) {
  const {previous, next} = pageContext
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <article className='max-w-4xl m-2 p-4 md:mx-auto'>
        <header className='text-center'>
          <h1>{data.mdx.frontmatter.title}</h1>
          <GatsbyImage image={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData} />
          <p className='italic'>{data.mdx.frontmatter.description}</p>
        </header>
        {children}
      </article>

      {/* Navigation */}
      <nav className="max-w-4xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between mx-auto my-4">
          <li>
            {previous && (
              <Link to={`/${previous.frontmatter.slug}`} rel="prev" aria-label={previous.frontmatter.title} title={previous.frontmatter.title} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center gap-4"><FaArrowLeft/>Previous Post</h3>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.frontmatter.slug}`} rel="next" aria-label={next.frontmatter.title} title={next.frontmatter.title} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <h3 className="flex items-center justify-right gap-4">Next Post<FaArrowRight/></h3>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        description
        hero_image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
export default Post

export const Head = ({data}) => (
  <Seo 
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.description}
  />
)