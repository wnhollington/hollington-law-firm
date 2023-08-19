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
                <h2 className="text-center text-3xl font-semibold mb-2">Contact Us Today</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <p className="text-lg text-gray-900 max-w-3xl mx-auto mb-12">From our office in Parker, Hollington Law Firm, LLC represents clients throughout the Denver Metro Area, including Parker, Castle Rock, Lone Tree, Englewood, and Centennial</p>
                <Link to="/schedule-consultation" className="bg-primary hover:shadow-lg text-white text-xl font-bold p-4 rounded-lg">Start Your Free Consult Today</Link>
            </div>
        </section>
    )
}

export default Schedule