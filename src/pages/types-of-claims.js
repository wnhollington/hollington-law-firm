import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const TypesOfClaims = () => {

    const data = useStaticQuery(graphql`
        query queryTypesOfClaims {
            allContentfulTypesOfClaims(
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
                    <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">All Claim Types</h1>
                    <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify">
                        <p>Welcome to our construction defect claims page. Hollington Law Firm, LLC is one of the few Colorado law firms that handles construction defect and consumer complaints on behalf of Colorado home and property owners. Below are the types of construction defect claims we regularly get involved in. Having said that, if you do not see your particular problem or concern, we still encourage your to reach out. As a leading Colorado construction defect law firm, we have experienced the gamut of construction defect issues. Having said that, if we cannot handle the matter ourselves, we are more than happy to refer you to another attorney in our network that can.</p>
                    </div>                

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 lg:mx-auto text-center my-8">
                        {data.allContentfulTypesOfClaims.edges.map((edge) => {
                            return (
                                <Link to={`/types-of-claims/${edge.node.slug}`}className="text-lg md:text-xl font-semibold leading-6 text-gray-900 hover:text-white hover:bg-gradient-to-b from-primary to-red-800 py-8 bg-white shadow-lg border-1 border-gray-900 rounded-md">{edge.node.title}</Link>
                            )
                        })}
                    </div>

                </div>
                <Sidebar/>
            </div>
        </Layout>
    )
}

export default TypesOfClaims

export const Head = () => (
  <Seo 
    title="Types of Construction Defect Claims We Handle"
    description="Hollington Law Firm is a leading Colorado construction defect law firm that handles claims on behalf of Colorado home and property owners."
  />
)