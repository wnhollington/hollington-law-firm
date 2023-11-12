import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Tabs } from 'flowbite-react'
import BlockContent from "@sanity/block-content-to-react"

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'

// Render
function Attorney ({ data }) {
  return (
    <Layout pageTitle={data.sanityAttorney.name}>

      <article className='max-w-5xl mt-8 p-4 md:mx-auto'>
        <h1 className='text-center'>{data.sanityAttorney.name}</h1>
        <div className="flex flex-col sm:flex-row my-2 p-2 gap-6 shadow-md rounded-md">
            <GatsbyImage image={data.sanityAttorney.bio_image.asset.gatsbyImageData} alt={data.sanityAttorney.name}/>
            <div className="mx-4 mb-4 w-full m-h-48 md:h-full md:w-2/3">
                <Tabs.Group
                    aria-label="Default tabs"
                >
                    <Tabs.Item
                    active
                    title="Education"
                    >
                        <ul className="text-lg mx-0">
                            {data.sanityAttorney.education.map((item) => {
                                return (
                                    <li className='py-1'>{item}</li>
                                )
                            })}
                        </ul>
                    </Tabs.Item>

                    <Tabs.Item
                    title="Publications"
                    >
                        <ul className="text-lg mx-0">
                            {data.sanityAttorney.publications.map((item) => {
                                return (
                                    <li className='py-1'>{item}</li>
                                )
                            })}
                        </ul>
                    </Tabs.Item>

                    <Tabs.Item
                    title="Recognitions"
                    >
                        <ul className="text-lg mx-0">
                            {data.sanityAttorney.recognitions.map((item) => {
                                return (
                                    <li className='py-1'>{item}</li>
                                )
                            })}
                        </ul>
                    </Tabs.Item>
                    <Tabs.Item
                    title="Bar Admissions"
                    >
                        <ul className="text-lg mx-0">
                            {data.sanityAttorney.bar_admissions.map((item) => {
                                return (
                                    <li className='py-1'>{item}</li>
                                )
                            })}
                        </ul>
                    </Tabs.Item>

                </Tabs.Group>
            </div>
        </div>
        <BlockContent blocks={data.sanityAttorney._rawBio} />
      </article>

    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    sanityAttorney(_id: {eq: $id}) {
        name
        bio_image {
            asset {
                gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
        }
        education
        publications
        recognitions
        bar_admissions
        _rawBio
    }
  }
`
export default Attorney

export const Head = ({data}) => (
  <Seo 
    title={data.sanityAttorney.name}
    description={data.sanityAttorney.name}
  />
)