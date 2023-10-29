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
    const pageFilter = ["About Me", "Disclaimer", "Privacy Policy"]
    return (            
        <>
            <Link to="/about-me" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</Link>
            <Dropdown
                inline
                label="Practice Areas"
                placement={placement}
            >
                {data.allMdx.edges.map((edge) => {
                    return (
                        pageFilter.includes(edge.node.frontmatter.title) ? null : <Dropdown.Item><Link to={`/${edge.node.frontmatter.slug}`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">{edge.node.frontmatter.practiceArea}</Link></Dropdown.Item>
                    )
                })}
                <Dropdown.Item><Link to={`/practice-areas`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">View All Practice Areas</Link></Dropdown.Item>

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
                <Dropdown.Item><Link to="/contact" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Contact</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/schedule-consultation" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Schedule Consultation</Link></Dropdown.Item>
            </Dropdown>
        </>

    )
}

export default HeaderMenu