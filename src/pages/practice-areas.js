import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6";

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const PracticeAreas = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [dropdownActive, setDropdownActive] = useState(false)

    const data = useStaticQuery(graphql`
        query queryPracticeAreas {
            allContentfulPracticeAreas(
                filter: {category: {category: {ne: "Pro Bono Representation"}}}
                sort: {title: ASC}
                ){
                edges {
                    node {
                        title
                        slug
                        category {
                            category
                        }
                    }
                }
            }
        }
    `)
    // Filter Practice Areas
    let personalInjury = data.allContentfulPracticeAreas.edges.filter((edge) => {
        return edge.node.category.category === "Personal Injury"
    })
    let businessDisputes = data.allContentfulPracticeAreas.edges.filter((edge) => {
        return edge.node.category.category === "Business Disputes"
    })
    let practiceAreas = [
        {id: 0, name: "All Practice Areas", entries: data.allContentfulPracticeAreas.edges},
        {id: 1, name: "Personal Injury", entries: personalInjury},
        {id: 2, name: "Business Disputes", entries: businessDisputes},
    ]
    const handleTabs = (item) => {
        setActiveTab(item);
        setDropdownActive(!dropdownActive);
    }

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
                <div className="lg:w-2/3 max-w-6xl mx-auto">
                    <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">All Practice Areas</h1>
                    <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify">
                        <p>Welcome to our practice areas page. We regularly represent clients in the matters outlined below. Having said that, if you don't see your specific legal concern listed here, we still encourage you to reach out to us. If we cannot handle the matter ourselves, we are more than happy to refer you to another attorney in our network that can. Our dedicated team is well-connected within the legal community and can refer you to a qualified attorney who can address your specific needs. Your well-being and legal representation are our top priority and utmost concern.</p>
                    </div>

                     {/* Category Tabs */}
                     <div className="mx-8 lg:mx-0 w-64 bg-slate-100">
                        <div className="flex flex-row justify-between items-center px-2 py-2 bg-slate-50 hover:cursor-pointer" onClick={() => setDropdownActive(!dropdownActive)}>
                            <p className="text-xl" >{practiceAreas[activeTab].name}</p>
                            <FaChevronDown/>
                        </div>

                        <ul className={dropdownActive ? "block absolute bg-slate-50  w-64 py-1 px-2" : "hidden"}>
                            {
                                practiceAreas.map((item) => {
                                    return (
                                        <li className="py-2 text-xl hover:cursor-pointer hover:bg-slate-100" key={item.id} onClick={() => handleTabs(item.id)}>{item.name}</li>  
                                    )
                                })
                            }
                        </ul>
                    </div>                   

                    {/* Category Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 lg:mx-auto text-center my-8">
                        {practiceAreas[activeTab].entries.map((edge) => {
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
  />
)