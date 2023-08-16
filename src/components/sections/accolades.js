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
                        gatsbyImageData(height:85, layout:FIXED)
                    }
                  }
                }
            }
        }
    `)
    return (
        <section className="md:container">
            <div className="flex gap-8 overflow-x-scroll my-2 py-2 items-center justify-between">
                {
                    data.allFile.edges.map((edge) => {
                        return(
                            <div className="">
                                <GatsbyImage 
                                    image={edge.node.childImageSharp.gatsbyImageData}
                                    imgClassName=""
                                />
                            </div>
                        )  
                    })
                }                  
            </div>
        </section>
    )
}

export default Accolades