import * as React from "react"
import { RiChatQuoteFill } from "react-icons/ri"
import { useInView } from "react-intersection-observer"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useWindowWidth } from "../../utilities/use-window-width";

const Testimonials = () => {
    const testimonials = [
        {id: 1, author: "Emilia Rodriguez", review: "I appreciate all the hard work that you have put into completing my case. I am very grateful to you. Before I contacted you, I was hopeless. I have no words to express my gratitude to you."},
        {id: 2, author: "Peter Mink", review: "Neal is a very strong professional with great insight and fortitude. He blends a distinct style of finding solutions for short and long term problems that produce results. With an experienced and well-rounded background in legal studies and work positions, Neal is a great asset to any team. "}
    ]
    
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    // Calculate Window Width & Set Visible Slides for Carousel
    const windowWidth = useWindowWidth();
    const setCarouselSliders = (windowWidth) => {
        if (windowWidth > 1500) {
            return 2
        } 
        else {
            return 1
        }
    }
    return (
        <section id="testimonials" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">Client Stories</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <CarouselProvider
                    isIntrinsicHeight={true}
                    totalSlides={testimonials.length}
                    isPlaying={true}
                    infinite={true}
                    visibleSlides={setCarouselSliders(windowWidth)}
                >
                    <Slider>                            
                        {
                            testimonials.map((testimonial) => {
                                return (
                                    <Slide 
                                        index={1}
                                        className="items-center justify-center shadow-lg m-4 p-4"
                                    >
                                        <p class="mt-6 text-gray-500 text-lg"><span className="text-5xl font-semibold text-primary inline"><RiChatQuoteFill/></span>{testimonial.review}</p>
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