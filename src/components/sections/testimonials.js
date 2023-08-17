import * as React from "react"
import { RiChatQuoteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Testimonials = () => {
    const testimonials = [
        {id: 1, author: "Emilia Rodriguez", review: "I would like to appreciate all the hard work that you have put into completing my case. I am very grateful to you. Before I contacted you, I was hopeless. I have no words to express my gratitude to you."},
    ]
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="testimonials" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">Client Stories</h2>
                <div className="w-10 mx-auto border-b-4 border-blue-900 mb-8"></div>
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
                                                    <p class="mt-6 text-gray-500 text-lg"><span className="text-5xl font-semibold text-blue-900 inline"><RiChatQuoteFill/></span>{testimonial.review}</p>
                                                    <h3 class="mt-6 text-lg text-center font-medium text-blue-900">{testimonial.author}</h3>
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