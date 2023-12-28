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
function Page({ data }) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
       return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>;
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = data.contentfulPracticeAreas.body.references.find(x => x.contentful_id === node.data.target.sys.id)
        return <Link to={`/${entry.slug}`}>{node.content[0].value}</Link>;
      },
    }

  }
  return (
    <Layout>
      <div className='flex flex-col md:flex-row my-8 p-4 gap-6 justify-center'>
        <article className='md:w-2/3 max-w-6xl'>
          <h1 className="text-center">{data.contentfulPracticeAreas.title}</h1>
          <div>{renderRichText(data.contentfulPracticeAreas.body, options)}</div>
        </article>
        <Sidebar />
      </div>
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
        references {
          slug
          title
          contentful_id
        }
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