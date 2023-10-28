import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Accolades = () => {
    const data = useStaticQuery(graphql`
        query imageQuery {
            allFile(filter: {relativeDirectory: {eq: "accolades"}}) {
                edges {
                  node {
                    id
                    childImageSharp {
                        gatsbyImageData(height: 85, layout:FIXED)
                    }
                  }
                }
            }
        }
    `)
    return (
        <section className="container hidden lg:flex flex-row justify-around relative xl:-top-16 bg-white shadow-lg p-8">
            {data.allFile.edges.map((edge, index) => {
                return (
                    <div key={index}>
                        <GatsbyImage 
                            image={edge.node.childImageSharp.gatsbyImageData}
                            alt={edge.node.id}
                        />
                    </div>
                )
            })}
        </section>
    )
}

export default Accolades