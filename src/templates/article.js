import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'
import Sidebar from '../components/sidebar/index.js';

// Render
function Article ({ data, pageContext }) {
  const {previous, next} = pageContext
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
       return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>;
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = data.contentfulArticles.body.references.find(x => x.contentful_id === node.data.target.sys.id)
        switch (entry.internal.type) {
          case 'ContentfulPracticeAreas':
            return <Link to={`/practice-areas/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulAttorneys':
            return <Link to={`/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulArticles':
            return <Link to={`/articles/${entry.slug}`}>{node.content[0].value}</Link>;
          default:
            return <Link to={`/`}>{node.content[0].value}</Link>;
        }
        
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target
        return (
          <div className='flex justify-center my-8 lg:my-12'>
            <GatsbyImage 
              image={getImage(gatsbyImageData)}
              alt={description}
              className='mx-auto'
            />
          </div>
        )
      },
    }
  }
  return (
    <Layout>

      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          
          <header className='mb-4'>
            <h1 className='bg-gradient-to-br from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-lg shadow-md'>{data.contentfulArticles.title}</h1>
            <div className='flex flex-col md:flex-row gap-1 md:gap-6'>
              <p className='flex flex-row items-center gap-1'>
                <StaticImage
                  src="https://res.cloudinary.com/wnhollington/image/upload/c_crop,w_1240,h_1240,x_161,y_53,ar_1:1/v1707868812/Neal_Hollington_2_qy86dn.jpg"
                  height={50}
                  width={50}
                  className='rounded-full'
                  alt="W. Neal Hollington, Esq."
                />
                <span>W. Neal Hollington, Esq.</span>
              </p>
              <p className='flex flex-row items-center gap-1'><FaCalendarAlt className='text-primary inline'/><span>{data.contentfulArticles.updatedAt}</span></p>
              <p className='flex flex-row items-center gap-1'><FaClock className='text-primary inline'/><span>3 minute read</span></p>
              <p className='flex flex-row items-center gap-1'><FaTag className='text-primary inline'/><span><Link to="/articles">{data.contentfulArticles.metadata.tags[0].name}</Link></span></p>
            </div>
          </header>
          
          {renderRichText(data.contentfulArticles.body, options)}

          <p className='italic'>The information provided on this website is for general informational purposes only and should not be construed as legal advice or legal opinion. You should not act or refrain from acting on the basis of any information provided on this website without seeking legal advice from an attorney.</p>
          
          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap justify-between mx-auto my-4">
              <li>
                {previous && (
                  <Link to={`/articles/${previous.slug}`} rel="prev" aria-label={previous.title} title={previous.title} className="inline-flex items-center p-2 text-md font-medium no-underline text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    &larr; Previous Post
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/articles/${next.slug}`} rel="next" aria-label={next.title} title={next.title} className="inline-flex items-center p-2 text-md font-medium no-underline  text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                    Next Post &rarr;
                  </Link>
                )}
              </li>
            </ul>
          </nav>

        </article>

        <Sidebar />

      </div>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulArticles(id: {eq: $id}) {
      title
      updatedAt(formatString: "MMM DD, YYYY")
      seoTitle
      seoDescription
      metadata {
        tags {
          name
        }
      }
      body {
        raw
        references {
          ... on ContentfulArticles {
            contentful_id
            title
            slug
            internal {
              type
            }
          }
          ... on ContentfulPracticeAreas {
            contentful_id
            title
            slug
            internal {
              type
            }
          }
          ... on ContentfulAttorneys {
            contentful_id
            slug
            internal {
              type
            }
          }
          ... on ContentfulAsset {
            contentful_id
            id
            title
            description
            gatsbyImageData(layout: CONSTRAINED, quality: 80, formats: [WEBP, AUTO], placeholder: BLURRED)
            __typename
          }
        }
      }
    }
  }
`
export default Article

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulArticles.seoTitle}
    description={data.contentfulArticles.seoDescription}
  />
)