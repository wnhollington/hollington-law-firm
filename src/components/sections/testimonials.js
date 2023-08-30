import * as React from "react"
import { RiChatQuoteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useWindowWidth } from "../../utilities/use-window-width";
import { checkMobile } from "../../utilities/check-mobile";
import { testimonials } from "../../utilities/testimonials";

const Testimonials = () => {
    const clientTestimonials = testimonials
    
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    // Check Mobile, Calculate Window Width & Set Visible Slides for Carousel
    const isMobile = checkMobile();
    const windowWidth = useWindowWidth();
    const setCarouselSliders = (windowWidth, isMobile) => {
        if (isMobile) {
            return 1
        } 
        else if (!isMobile && windowWidth.width < 1500 ) {
            return 1
        } 
        else {
            return 2
        }
    }
    return (
        <section id="testimonials" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl mb-2 font-medium">Client Stories</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <CarouselProvider
                    isIntrinsicHeight={true}
                    totalSlides={clientTestimonials.length}
                    isPlaying={true}
                    infinite={true}
                    visibleSlides={setCarouselSliders(windowWidth)}
                >
                    <Slider>                            
                        {
                            clientTestimonials.map((testimonial) => {
                                return (
                                    <Slide 
                                        index={1}
                                        className="items-center justify-center rounded-lg shadow-lg p-4"
                                    >
                                        <p class="mt-6 text-gray-900 text-xl text-justify"><span className="text-5xl font-semibold text-primary inline"><RiChatQuoteFill/></span>{testimonial.review}</p>
                                        <h3 class="mt-6 text-lg text-center font-medium text-primary">{testimonial.author}</h3>
                                    </Slide>
                                )
                            })
                        }
                    </Slider>
                </CarouselProvider>
                                   
            </div>
        </section>
    )
}

export default Testimonials