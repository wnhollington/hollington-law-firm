import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"
import { useStaticQuery, graphql } from "gatsby"

const HeaderMenu = ({placement}) => {

    const data = useStaticQuery(graphql`
        query queryProjectsAndClaims {
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
        <>
            <Dropdown
                inline
                label="Who We Are"
                placement={placement}
            >
                <Dropdown.Item key="about the firm"><Link to={`/about-the-firm`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">About the Firm</Link></Dropdown.Item>

                <Dropdown.Item key="W. Neal Hollington"><Link to={`/w-neal-hollington`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">W. Neal Hollington, Esq.</Link></Dropdown.Item>

            </Dropdown>

            <Dropdown
                inline
                label="Types of Projects"
                placement={placement}
            >
                {data.allContentfulTypesOfProjects.edges.map((edge, key) => {
                    return (
                        <Dropdown.Item key={key}><Link to={`/types-of-projects/${edge.node.slug}`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">{edge.node.title}</Link></Dropdown.Item>
                    )
                })}
                <Dropdown.Item><Link to={`/types-of-projects/`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">View All</Link></Dropdown.Item>
            </Dropdown>

            <Dropdown
                inline
                label="Types of Claims"
                placement={placement}
            >
                {data.allContentfulTypesOfClaims.edges.map((edge, key) => {
                    return (
                        <Dropdown.Item key={key}><Link to={`/types-of-claims/${edge.node.slug}`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">{edge.node.title}</Link></Dropdown.Item>
                    )
                })}
                <Dropdown.Item><Link to={`/types-of-claims/`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">View All</Link></Dropdown.Item>
            </Dropdown>

            <Dropdown
                inline
                label="Resources"
                placement={placement}
            >
                <Dropdown.Item key="Articles"><Link to="/articles" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Articles</Link></Dropdown.Item>
                <Dropdown.Item key="Ebook"><Link to="/homeowners-guide-to-residential-construction-defects-free-download" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Ebook</Link></Dropdown.Item>

            </Dropdown>

            <Link to={`/schedule-consultation`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Schedule Consultation</Link>
            
        </>

    )
}

export default HeaderMenu