import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import { RiChatQuoteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulTestimonials {
                edges {
                  node {
                    name
                    testimonial {
                        testimonial
                    }
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
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
            breakpoint: 1275,
            settings: {
                slidesToShow: 1
            }
            }
        ]
    }
    return (
        <section id="testimonials" ref={ref}>
            <div className={`container my-16 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl mb-2 font-medium">Client Stories</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>

                <Slider {...sliderSettings}>                            
                    {
                        data.allContentfulTestimonials.edges.map((testimonial, index) => {
                            return (
                                <div 
                                    index={1}
                                    key={index}
                                    className="items-center justify-center rounded-lg shadow-lg p-4"
                                >
                                    <p className="mt-6 text-gray-900 text-xl text-justify"><span className="text-5xl font-semibold text-primary inline"><RiChatQuoteFill/></span>{testimonial.node.testimonial.testimonial}</p>
                                    <h3 className="mt-6 text-lg text-center font-medium text-primary">{testimonial.node.name}</h3>
                                </div>
                            )
                        })
                    }
                </Slider>      
            </div>
        </section>
    )
}

export default Testimonials