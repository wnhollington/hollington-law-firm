import * as React from "react"
import { useInView } from "react-intersection-observer"

const TypesOfClaims = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const typesOfDefects = ['Design Defects', 'Material Defects', 'Poor Workmanship', 'Expansive & Swelling Soils', 'Mechanical Systems', 'Non Disclosure & Fraud',]

    return (
        <section id="types-of-claims" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Claims We Handle</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {typesOfDefects.map((edge, index) => {
                        return (
                            <li
                            key={index}
                            className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md"
                            >{edge}</li>                         
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default TypesOfClaims