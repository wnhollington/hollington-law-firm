import * as React from "react"
import { useInView } from "react-intersection-observer"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Priority from "../../images/svg/priority.svg"
import Handle from "../../images/svg/handle.svg"
import Results from "../../images/svg/results.svg"
import Talk from "../../images/svg/talk.svg"
import Wait from "../../images/svg/wait.svg"
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useWindowWidth } from "../../utilities/use-window-width"

const WhatSetsUsApart = () => {
    const process = [
        {id: 1, heading: "1. You are the Priority", caption: "At Hollington Law Firm, LLC, you are the priority. We will walk you through every step of the process with compassion and individual attention and dedication to your legal matter."},
        {id: 2, heading: "2. We Explain the Process", caption: "A lot of firms like to overcomplicate things. Not us. We'll clearly and honestly explain the claim and litigation process, you are informed and comfortable every step of the way."},
        {id: 3, heading: "3. You Won't Wait on Us", caption: "In fact, we'll come to you - your home or virtually via Zoom, Facetime, or Video Chat. Whether it's returning a call, answering a question, or just checking in, we are always available."},
        {id: 4, heading: "4. Our Team Handles Everything", caption: "It's easy to feel overwhelmed and we understand that. We will take on your stress by collecting documents, negotiating with the other party, and fighting on your behalf."},
        {id: 5, heading: "5. We'll Get You Great Results", caption: "Our team has a track record of getting clients great outcomes. We will pursue full and complete justice on your behalf, regardless of any obstacles along the way."},
    ]
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    const svgIcons = (index) => {
        switch (index) {
            case 0:
                return <Priority/>
            case 1:
                return <Talk/>
            case 2:
                return <Wait/>
            case 3:
                return <Handle/>
            case 4:
                return <Results/>
            default:
                break;
        }
    }
    // Calculate Window Width & Set Visible Slides for Carousel
    const windowWidth = useWindowWidth();
    const setCarouselSliders = (windowWidth) => {

        if (windowWidth > 1550) {
            return 3
        } else if ((windowWidth > 1025) && (windowWidth < 1550)) {
            return 2
        } else {
            return 1
        }
    }
    return (
        <section id="what-sets-us-apart" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-semibold mb-2">What Sets Us Apart</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <CarouselProvider
                    isIntrinsicHeight={true}
                    totalSlides={process.length}
                    isPlaying={true}
                    infinite={false}
                    visibleSlides={setCarouselSliders(windowWidth)}
                >
                    <Slider>                            
                        {
                            process.map((step, index) => {
                                return (
                                    <Slide index={1}>
                                        <div className="items-center justify-center block m-4 p-6 shadow-lg">
                                            <div className="svg-icons">{svgIcons(index)}</div>
                                            <h3 class="mt-12 text-2xl font-medium text-gray-900">{step.heading}</h3>
                                            <p class="mt-6 text-gray-900 text-lg">{step.caption}</p>
                                        </div>
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

export default WhatSetsUsApart