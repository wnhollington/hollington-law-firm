import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const TypesOfProjects = () => {

    const data = useStaticQuery(graphql`
        query queryTypesOfProjects {
            allContentfulTypesOfProjects(
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
                    <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">All Project Types</h1>
                    <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify">
                        <p>Welcome to our projects page. Hollington Law Firm, LLC is one of the few Colorado law firms that handles construction defect and consumer complaints on behalf of Colorado home and property owners. Below are the types of projects we regularly get involved in. Having said that, if you do not see your particular project type, we still encourage your to reach out. If we cannot handle the matter ourselves, we are more than happy to refer you to another attorney in our network that can.</p>
                    </div>                

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 lg:mx-auto text-center my-8">
                        {data.allContentfulTypesOfProjects.edges.map((edge) => {
                            return (
                                <Link to={`/types-of-projects/${edge.node.slug}`}className="text-lg md:text-xl font-semibold leading-6 text-gray-900 hover:text-white hover:bg-gradient-to-b from-primary to-red-800 py-8 bg-white shadow-lg border-1 border-gray-900 rounded-md">{edge.node.title}</Link>
                            )
                        })}
                    </div>

                </div>
                <Sidebar/>
            </div>
        </Layout>
    )
}

export default TypesOfProjects

export const Head = () => (
  <Seo 
    title="Types of Construction Projects We Handle"
    description="Hollington Law Firm is a Colorado construction defect law firm that handles claims on behalf of Colorado home and property owners."
  />
)