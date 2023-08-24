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
            <div className={`container my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Contact Me Today</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <p className="text-xl text-justify text-gray-900 max-w-3xl mx-auto mb-12">If you are looking for an experienced and personable construction lawyer, I would be happy to meet with you and see if we would be a good fit to work together. I am conveniently located in Englewood, CO. I am also happy to discuss your legal concerns by phone or schedule a time for us to me virtually. If you would like to schedule a time for us to chat, please click the link below. I look forward to speaking with you and the opportunity to earn your business!</p>
                <Link to="/schedule-consultation" className="bg-primary hover:shadow-lg text-white text-xl font-bold p-4 rounded-lg">Start Your Free Consult Today</Link>
            </div>
        </section>
    )
}

export default Schedule