import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = ({placement}) => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allMdx(filter: {frontmatter: {type: {eq: "page"}}}, sort: {frontmatter: {title: ASC}}){
                edges {
                    node {
                        frontmatter {
                            title
                            practiceArea
                            slug
                        }
                    }
                }
            }
        }
    `)
    const pageFilter = ["About Me", "Disclaimer", "Privacy Policy", "About the Firm", "W. Neal Hollington, Esq.", "Micah 6:8 Initiative"]
    return (            
        <>
            <Dropdown
                inline
                label="About"
                placement={placement}
            >
                <Dropdown.Item key="about the firm"><Link to={`/about-the-firm`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">About the Firm</Link></Dropdown.Item>
                <Dropdown.Item key="W. Neal Hollington"><Link to={`/w-neal-hollington`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">W. Neal Hollington</Link></Dropdown.Item>
                <Dropdown.Item key="Micah 6:8 Initiative"><Link to={`/micah-6:8-initiative`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Micah 6:8 Initiative</Link></Dropdown.Item>

            </Dropdown>

            <Dropdown
                inline
                label="Practice Areas"
                placement={placement}
            >
                {data.allMdx.edges.map((edge) => {
                    return (
                        pageFilter.includes(edge.node.frontmatter.title) ? null : <Dropdown.Item key={edge.node.frontmatter.title}><Link to={`/${edge.node.frontmatter.slug}`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">{edge.node.frontmatter.practiceArea}</Link></Dropdown.Item>
                    )
                })}
                <Dropdown.Item key="All Practice Areas"><Link to={`/practice-areas`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">View All Practice Areas</Link></Dropdown.Item>

            </Dropdown>
            {/* <Dropdown
                inline
                label="Resources"
                placement={placement}
            >
                <Dropdown.Item>Articles</Dropdown.Item>
                <Dropdown.Item>Videos</Dropdown.Item>
                <Dropdown.Item>E-Books</Dropdown.Item>
            </Dropdown> */}
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