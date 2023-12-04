import * as React from 'react'
import { graphql } from 'gatsby'
import { Tabs } from 'flowbite-react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Components
import Layout from '../components/layout.js'
import Seo from '../components/seo.js'

// Render
function Attorney ({ data }) {

  return (
    <Layout pageTitle={data.contentfulAttorneys.name}>

      <article className='max-w-5xl mt-8 p-4 md:mx-auto'>
        <h1 className='text-center'>{data.contentfulAttorneys.name}</h1>
        <div className="flex flex-col sm:flex-row my-2 p-2 gap-6 shadow-md rounded-md">
            <img src={data.contentfulAttorneys.bioImage[0].secure_url} alt={data.contentfulAttorneys.name}/>
            <div className="mx-4 mb-4 w-full m-h-48 md:h-full md:w-2/3">
                <Tabs.Group
                    aria-label="Default tabs"
                >
                    <Tabs.Item
                    active
                    title="Education"
                    >
                        <ul className="text-lg mx-0">
                            {data.contentfulAttorneys.education.map((item) => {
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
                            {data.contentfulAttorneys.publications.map((item) => {
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
                            {data.contentfulAttorneys.recognitions.map((item) => {
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
                            {data.contentfulAttorneys.barAdmissions.map((item) => {
                                return (
                                    <li className='py-1'>{item}</li>
                                )
                            })}
                        </ul>
                    </Tabs.Item>

                </Tabs.Group>
            </div>
        </div>
        <div>
            {renderRichText(data.contentfulAttorneys.bio)}
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
            secure_url
        }
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
    description={data.contentfulAttorneys.name}
  />
)