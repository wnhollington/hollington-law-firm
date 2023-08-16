import * as React from "react"
import { RiChatQuoteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = () => {
    const testimonials = [
        {id: 1, author: "Lauren Hollington", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {id: 2, author: "Neal Hollington", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {id: 3, author: "Bethany Pfeiffer", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    ]
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="testimonials" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">What Our Clients are Saying</h2>
                <div className="w-10 mx-auto border-b-4 border-blue-800 mb-8"></div>
                <div className="lg:flex items-center justify-center">

                    <div class="mt-8 lg:px-6 lg:mt-0">
                        <CarouselProvider
                            isIntrinsicHeight={true}
                            totalSlides={testimonials.length}
                            isPlaying={true}
                            infinite={false}
                        >
                            <Slider>                            
                                {
                                    testimonials.map((testimonial) => {
                                        return (
                                            <Slide index={1}>
                                                <div className="items-center justify-center block">
                                                    <p class="mt-6 text-gray-500 text-lg"><span className="text-5xl font-semibold text-blue-800 inline"><RiChatQuoteFill/></span>{testimonial.review}</p>
                                                    <h3 class="mt-6 text-lg text-center font-medium text-blue-800">{testimonial.author}</h3>
                                                </div>
                                            </Slide>
                                        )
                                    })
                                }
                            </Slider>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials