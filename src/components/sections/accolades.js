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
        <section>
            <div className="md:container flex gap-8 overflow-x-scroll my-2 py-6 items-center justify-between z-10">
                {
                    data.allFile.edges.map((edge) => {
                        return(
                            <div className="my-4">
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