import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Accolades = () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(filter: { relativeDirectory: { eq: "accolades" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(height: 95, layout: FIXED)
            }
          }
        }
      }
    }
  `)

  const linkMap = {
    "avvo": "https://www.avvo.com/attorneys/80134-co-william-hollington-5009840.html",
    "super_lawyers": "https://profiles.superlawyers.com/colorado/parker/lawyer/w-neal-hollington/fdca2269-04d7-42b2-b7e6-aeb8e3aa51b2.html",
    "best_lawyers": "https://www.bestlawyers.com."
  }

  return (
    <section className="container bg-white shadow-lg py-4 relative xl:-top-12">
      {/* OUTER: scrollable if needed */}
      <div className="overflow-x-auto">
        {/* INNER: flex no-wrap, spacing */}
        <div className="flex gap-12 justify-around min-w-fit">
          {data.allFile.edges.map((edge) => {
            const imageName = edge.node.name
            const link = linkMap[imageName]
            return (
              <a
                key={edge.node.id}
                href={link}
                target="_blank"
              >
                <GatsbyImage
                  image={edge.node.childImageSharp.gatsbyImageData}
                  alt={`Badge: ${imageName}`}
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Accolades