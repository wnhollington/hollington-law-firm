import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = ({placement}) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allContentfulPracticeAreas{
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
        <>
            <Dropdown
                inline
                label="About"
                placement={placement}
            >
                <Dropdown.Item key="about the firm"><Link to={`/about-the-firm`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">About the Firm</Link></Dropdown.Item>
                <Dropdown.Item key="W. Neal Hollington"><Link to={`/w-neal-hollington`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">W. Neal Hollington, Esq.</Link></Dropdown.Item>

            </Dropdown>

            <Dropdown
                inline
                label="Practice Areas"
                placement={placement}
            >
                {data.allContentfulPracticeAreas.edges.map((edge) => {
                    return (
                        <Dropdown.Item key={edge.title}><Link to={`/${edge.node.slug}`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">{edge.node.title}</Link></Dropdown.Item>
                    )
                })}
                <Dropdown.Item key="All Practice Areas"><Link to={`/practice-areas`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">View All Practice Areas</Link></Dropdown.Item>

            </Dropdown>
            
            <Dropdown
                inline
                label="Contact"
                placement={placement}
            >
                <Dropdown.Item key="Contact"><Link to="/contact" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Contact</Link></Dropdown.Item>
                <Dropdown.Item key="Schedule Consultation"><Link to="/schedule-consultation" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Schedule Consultation</Link></Dropdown.Item>
            </Dropdown>
        </>

    )
}

export default HeaderMenu