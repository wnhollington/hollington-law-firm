import * as React from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

const Schedule = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="schedule" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Contact Us Today</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <p className="text-xl text-justify text-gray-900 max-w-5xl mx-auto mb-12">
                    If you are looking for an experienced Colorado civil litigation attorney, we would be happy to meet with you to see if we would be a good fit to work together. We are conveniently located in Parker, CO. We are also happy to discuss your matter with you by phone or schedule a time for us to meet virtually. If you would like to schedule a time for us to chat, please click the link below. We look forward to speaking with you and the opportunity to earn your business!
                </p>
                <Link to="/client-intake-form" className="bg-primary hover:shadow-lg text-white text-md sm:text-lg font-bold p-4 rounded-lg">Schedule Your Free Consultation</Link>
            </div>
        </section>
    )
}

export default Schedule