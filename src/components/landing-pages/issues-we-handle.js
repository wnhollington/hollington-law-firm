import * as React from "react"
import { useInView } from "react-intersection-observer"
import { FaCheckCircle } from "react-icons/fa";

const IssuesWeHandle = ({issueDescription, issues}) => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="issues-we-handle" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Issues We Handle</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
               
                <p className="text-xl text-gray-900 text-justify hyphens-auto my-4">{issueDescription}</p>
                
                <ul className="my-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {issues.map((issue, index) => {
                        return (
                            <li key={index} className="text-xl text-gray-900 font-semibold flex flex-row gap-4 items-center"><FaCheckCircle className="text-primary"/>{issue}</li>                 
                        )
                    })}
                </ul>

            </div>
        </section>
    )
}

export default IssuesWeHandle