import * as React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types';
import { Link } from 'gatsby';

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
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = data.contentfulTypesOfClaims.body.references.find(x => x.contentful_id === node.data.target.sys.id)
        switch (entry.internal.type) {
          case 'ContentfulTypesOfClaims':
            return <Link to={`/types-of-claims/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulAttorneys':
            return <Link to={`/${entry.slug}`}>{node.content[0].value}</Link>;
          case 'ContentfulArticles':
            return <Link to={`/articles/${entry.slug}`}>{node.content[0].value}</Link>;
          default:
            return <Link to={`/`}>{node.content[0].value}</Link>;
        }
      }
    }
  }
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='lg:w-2/3 max-w-6xl mx-auto'>
          <h1 className="bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-md shadow-xl">{data.contentfulTypesOfClaims.title}</h1>
          <div>{renderRichText(data.contentfulTypesOfClaims.body, options)}</div>
        </article>
        <Sidebar />
      </div>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulTypesOfClaims(id: {eq: $id}) {
      title
      seoTitle
      seoDescription
      slug
      body {
        raw
        references {
          ... on ContentfulAttorneys {
            contentful_id
            slug
            internal {
              type
            }
          }
        }
      }
    }
  }
`
export default TypesOfProjects

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulTypesOfClaims.seoTitle}
    description={data.contentfulTypesOfClaims.seoDescription}
  />
)