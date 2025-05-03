import * as React from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "gatsby"

const TypesOfClaims = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    return (
        <section id="types-of-claims" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">Types of Construction Defect Claims We Handle</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">

                    <Link to="/types-of-claims/design-defects" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">Design Defects</Link>

                    <Link to="/types-of-claims/material-defects" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">Material Defects</Link>

                    <Link to="/types-of-claims/expansive-soils" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">Expansive Soils</Link>
                    
                    <Link to="/types-of-claims/poor-workmanship" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">Poor Workmanship</Link>
                    
                    <Link to="/types-of-claims/insurance-claim-lawyer" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">Insurance Claims</Link>

                    <Link to="/types-of-claims/nondisclosure-and-fraud" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">Nondisclosure & Fraud</Link>           

                </div>
                <Link to="/types-of-claims" className="bg-gradient-to-b from-primary to-red-800 hover:shadow-lg text-white text-lg md:text-2xl font-semibold p-4 rounded-md">View All</Link>
            </div>
        </section>
    )
}

export default TypesOfClaims