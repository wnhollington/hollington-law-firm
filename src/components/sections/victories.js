import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { useInView } from "react-intersection-observer"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const Victories = () => {
    const data = useStaticQuery(graphql`
        query {
            allSanityResult {
                edges {
                  node {
                    result
                  }
                }
            }
        }
    `)
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    // Configure Carousel
    const sliderSettings = {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
            }
        ]
    }
    return (
        <section id="results" ref={ref}>
            <div className={`container my-16 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl mb-2 font-medium">Recent Results</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="bg-zinc-300 shadow-lg rounded-lg">
                    <Slider {...sliderSettings}>                            
                        {
                            data.allSanityResult.edges.map((result, index) => {
                                return (
                                    <div 
                                        index={1}
                                        key={index}
                                        className="items-center justify-center p-4 rounded-lg bg-white text-center"
                                    >
                                        <p className=" text-gray-900 font-bold text-2xl">${result.node.result}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>   
                </div>   
            </div>
        </section>
    )
}

export default Victories