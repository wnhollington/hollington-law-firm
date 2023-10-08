import * as React from "react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Priority from "../../images/svg/priority.svg"
import Handle from "../../images/svg/handle.svg"
import Results from "../../images/svg/results.svg"
import Talk from "../../images/svg/talk.svg"
import Wait from "../../images/svg/wait.svg"
import Slider from "react-slick"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

const WhatSetsUsApart = () => {
    const process = [
        {id: 1, heading: "1. You are the Priority", caption: "When you work with me, you are the priority. I will walk you through every step of the process with compassion, individual attention, and dedication to your legal matter."},
        {id: 2, heading: "2. I'll Explain the Process", caption: "A lot of attorneys like to overcomplicate things. Not me. I'll clearly and honestly explain the process, so you will be informed and comfortable every step of the way."},
        {id: 3, heading: "3. You Won't Wait on Me", caption: "In fact, I'll come to you - your home or virtually via Zoom, Facetime, or Video Chat. Whether it's returning a call, answering a question, or just checking in, I am always available."},
        {id: 4, heading: "4. I'll Handle Everything", caption: "It's easy to feel overwhelmed and I understand that. I'll take on your stress by collecting documents, negotiating with the other party, and fighting on your behalf."},
        {id: 5, heading: "5. I'll Get You Great Results", caption: "Though I can't guarantee results, my team has a track record of getting clients great outcomes. We will pursue full and complete justice on your behalf, regardless of any obstacles along the way."},
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
    // Configure Slick Carousel
    const [sliderRef, setSliderRef] = useState(null)
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
            breakpoint: 1275,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
            }
        ]
    }

    return (
        <section id="what-sets-us-apart" ref={ref}>
            <div className={`container my-16 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl mb-2 font-medium">What Sets Me Apart</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <Slider ref={setSliderRef} {...sliderSettings}>     
                    {process.map((step, index) => (
                        <div index={1} className="items-center justify-center rounded-lg block m-4 p-6 shadow-lg">
                            <div className="svg-icons">{svgIcons(index)}</div>
                            <h3 class="mt-12 text-2xl font-medium text-gray-900">{step.heading}</h3>
                            <p class="mt-6 text-gray-900 text-xl text-justify">{step.caption}</p>
                        </div>
                    ))}                       
                </Slider>
                <div className="flex gap-4 justify-center">
                    <BsFillArrowLeftCircleFill size={36} color="#6E0A05" onClick={sliderRef?.slickPrev}/>
                    <BsFillArrowRightCircleFill size={36} color="#6E0A05" onClick={sliderRef?.slickNext}/>
                </div>
            </div>
        </section>
    )
}

export default WhatSetsUsApart