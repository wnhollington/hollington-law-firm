import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

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
    const sliderSettings = {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 1,
        cssEase: "linear"
    }
    return (
        <section className="hidden xl:block">
            <Slider {...sliderSettings}>
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
            </Slider>
        </section>
    )
}

export default Accolades