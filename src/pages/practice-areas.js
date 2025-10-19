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
            allContentfulPracticeAreas {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `)

    // Custom order
    const ORDER = [
        "Contract Review & Project Planning",
        "Building Code & Permitting Issues",
        "Home Construction Disputes",
        "Construction Defects",
        "Payment Disputes & Mechanic's Liens",
        "Fraud & Non-Disclosure",
        "Insurance Delay & Denial",
    ]

    // Helper: normalize titles (strip fancy quotes etc.)
    const normalize = (str) => str.replace(/[’']/g, "'").trim()

    const orderedEdges = React.useMemo(() => {
        const rank = new Map(ORDER.map((t, i) => [normalize(t), i]))
        const edges = [...data.allContentfulPracticeAreas.edges]

        edges.sort((a, b) => {
            const ai = rank.has(normalize(a.node.title)) ? rank.get(normalize(a.node.title)) : Number.POSITIVE_INFINITY
            const bi = rank.has(normalize(b.node.title)) ? rank.get(normalize(b.node.title)) : Number.POSITIVE_INFINITY
            if (ai !== bi) return ai - bi
            return a.node.title.localeCompare(b.node.title)
        })

        return edges
    }, [data])

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
                <div className="lg:w-2/3 max-w-6xl mx-auto">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">All Practice Areas</h1>
                    <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify hyphens-auto">
                        <p>At Hollington Law Firm, we represent Colorado homeowners and property owners when construction projects, remodels, or repairs turn into costly disputes. Our clients come to us after discovering serious construction defects, unfinished or unpermitted work, contractor walk-offs, or hidden damage that was never disclosed. We also help those facing mechanic’s liens, payment disputes, or insurance companies that delay or deny legitimate claims. These situations can leave homeowners feeling frustrated and overwhelmed, unsure of where to turn or how to make things right. Our role is to step in, bring clarity, and hold contractors, builders, and insurers accountable under Colorado law. We focus on protecting your home, your investment, and your peace of mind. Explore the practice areas below to learn more about how we can help. Even if your issue is not listed, contact us to discuss your options, and if it is outside our scope, we will connect you with a trusted attorney who can help.</p>
                    </div>                

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 lg:mx-auto text-center my-8">
                        {orderedEdges.map((edge) => {
                            return (
                                <Link key={edge.node.slug} to={`/practice-areas/${edge.node.slug}`} className="text-lg md:text-xl font-semibold leading-6 text-gray-900 hover:text-white hover:bg-gradient-to-b from-primary to-red-800 py-8 bg-white shadow-lg border-1 border-gray-900 rounded-md">
                                    {edge.node.title}
                                </Link>
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
    title="Construction Law Practice Areas in CO"
    description="Explore Hollington Law Firm LLC’s practice areas in Colorado construction law, from material defects to warranty claims. Get experienced legal support."
  />
)