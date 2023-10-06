import * as React from "react"
import { RiChatQuoteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import { testimonials } from "../../utilities/testimonials";
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
    const clientTestimonials = testimonials
    
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
        infinite: false,
        responsive: [
            {
            breakpoint: 1250,
            settings: {
                slidesToShow: 1
            }
            }
        ]
    }
    return (
        <section id="testimonials" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl mb-2 font-medium">Client Stories</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>

                <Slider {...sliderSettings}>                            
                    {
                        clientTestimonials.map((testimonial) => {
                            return (
                                <div 
                                    index={1}
                                    className="items-center justify-center rounded-lg shadow-lg p-4"
                                >
                                    <p class="mt-6 text-gray-900 text-xl text-justify"><span className="text-5xl font-semibold text-primary inline"><RiChatQuoteFill/></span>{testimonial.review}</p>
                                    <h3 class="mt-6 text-lg text-center font-medium text-primary">{testimonial.author}</h3>
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