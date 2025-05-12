import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Tabs } from 'flowbite-react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES } from '@contentful/rich-text-types';
import '@fontsource/mr-dafoe/400.css';

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'

// Render
function Attorney ({ data }) {

    const attorneyBioImage = getImage(data.contentfulAttorneys.bioImage)

    const options = {
        renderNode: {
          [INLINES.HYPERLINK]: (node) => {
           return <a href={node.data.uri} target={`${node.data.uri.startsWith('https://hollingtonlawfirm.') ? '_self' : '_blank'}`}>{node.content[0].value}</a>;
          }
        }
    }

    return (
        <Layout pageTitle={data.contentfulAttorneys.name}>

            <article className='max-w-6xl mt-8 p-4 mx-auto'>
                <div className='shadow-lg rounded-lg'>
                    <h1 className='bg-gradient-to-b from-primary to-red-800 text-center text-white mb-2 py-8 px-2 rounded-t-md'>{data.contentfulAttorneys.name}</h1>
                    <div className="flex flex-col sm:flex-row my-2 p-2 gap-6">
                        {/* <img src={data.contentfulAttorneys.bioImage[0].secure_url} alt={data.contentfulAttorneys.name}/> */}
                        <GatsbyImage image={attorneyBioImage} alt={`${data.contentfulAttorneys.bioImage.title} | ${data.contentfulAttorneys.bioImage.description}`} />
                        <div className="mx-4 mb-4 w-full m-h-48 md:h-full md:w-2/3">
                            <Tabs.Group
                                aria-label="Default tabs"
                            >
                                <Tabs.Item
                                active
                                title="Education"
                                >
                                    <ul className="text-lg mx-0">
                                        {data.contentfulAttorneys.education.map((item, index) => {
                                            return (
                                                <li className='py-1' key={index}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Tabs.Item>

                                <Tabs.Item
                                title="Bar Admissions"
                                >
                                    <ul className="text-lg mx-0">
                                        {data.contentfulAttorneys.barAdmissions.map((item, index) => {
                                            return (
                                                <li className='py-1' key={index}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Tabs.Item>
                                
                                <Tabs.Item
                                title="Recognitions"
                                >
                                    <ul className="text-lg mx-0">
                                        {data.contentfulAttorneys.recognitions.map((item, index) => {
                                            return (
                                                <li className='py-1' key={index}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Tabs.Item>

                            </Tabs.Group>
                        </div>
                    </div>
                </div>
                <div>
                    {renderRichText(data.contentfulAttorneys.bio, options)}
                    <p className="font-['Mr_Dafoe'] text-2xl">W. Neal Hollington, Esq.</p>
                </div>
            </article>

        </Layout>
    )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    contentfulAttorneys(id: {eq: $id}) {
        name
        bioImage {
            gatsbyImageData (
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
            )
            title
            description
        }
        bioDescription
        education
        publications
        recognitions
        barAdmissions
        bio {
            raw
        }
    }
  }
`
export default Attorney

export const Head = ({data}) => (
  <Seo 
    title={data.contentfulAttorneys.name}
    description={data.contentfulAttorneys.bioDescription}
  />
)