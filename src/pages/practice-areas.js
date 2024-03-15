import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const PracticeAreas = () => {

    const data = useStaticQuery(graphql`
        query queryPracticeAreas {
            allContentfulPracticeAreas(
                filter: {category: {category: {eq: "Construction Litigation"}}}
                sort: {title: ASC}
                ){
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
                <div className="lg:w-2/3 max-w-6xl mx-auto">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">All Practice Areas</h1>
                    <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify">
                        <p>Welcome to our practice areas page. We regularly represent clients in the matters outlined below. Having said that, if you don't see your specific legal concern listed here, we still encourage you to reach out to us. If we cannot handle the matter ourselves, we are more than happy to refer you to another attorney in our network that can.</p>
                    </div>                

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 lg:mx-auto text-center my-8">
                        {data.allContentfulPracticeAreas.edges.map((edge) => {
                            return (
                                <Link to={`/practice-areas/${edge.node.slug}`}className="text-lg md:text-xl font-semibold leading-6 text-gray-900 hover:text-white hover:bg-primary py-8 bg-white shadow-lg border-1 border-gray-900">{edge.node.title}</Link>
                            )
                        })}
                    </div>

                </div>
                <Sidebar/>
            </div>
        </Layout>
    )
}

export default PracticeAreas

export const Head = () => (
  <Seo 
    title="Practice Areas"
    description="Hollington Law Firm is a Colorado civil litigation firm. From housing & construction defects, to personal injury and consumer fraud, the firm has the knowledge, passion, and resources to fight on your behalf."
  />
)