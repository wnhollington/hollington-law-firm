import * as React from "react"
import { useInView } from "react-intersection-observer"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    return (
        <section id="about" ref={ref}>
            <div className={`container my-16 lg:my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <div>
                    <h2 className="text-center text-3xl mb-2 font-medium">Who We Are</h2>
                    <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <div className="lg:flex lg:items-stretch text-center">
                        <div className="lg:w-1/3 flex justify-center">
                            <StaticImage
                                src="https://images.ctfassets.net/irf9uehwbpr8/zc4u3SXWOXh9ZEQZPDefu/dc7bbd11b81f570f48a131f6131804ea/e1eqadzarq4bjsapvwgy-Bio_Image_Enhanced.webp"
                                alt="W. Neal Hollington, Esq."
                                className="h-full object-contain"
                                style={{ maxHeight: '500px', maxWidth: '100%' }}
                            />
                        </div>
                        <div className="lg:w-2/3 h-full overflow-y-auto max-h-[500px] text-left">
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                At Hollington Law Firm, we focus exclusively on representing homeowners and property owners as a Colorado construction defect law firm. Led by attorney Neal Hollington, a dedicated and experienced construction defect lawyer our firm is committed to helping clients hold negligent builders, contractors, and developers accountable for defective construction and poor workmanship.
                            </p>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                We understand that construction defects can disrupt your life, reduce your property’s value, and lead to costly repairs. That’s why we provide personalized legal representation to guide you through every step of the claims process.
                            </p>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                Our construction defect attorney helps clients with claims involving:
                            </p>
                            <ul className="list-disc text-xl text-gray-900 ml-8 my-4 space-y-2">
                                <li>Structural defects (foundation issues, framing problems, load-bearing failures)</li>
                                <li>Water intrusion, leaks, and mold due to improper construction</li>
                                <li>Roofing defects and building envelope failures</li>
                                <li>Defective windows, doors, and siding installations</li>
                                <li>Poor workmanship and code violations</li>
                            </ul>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                At Hollington Law Firm, we combine deep knowledge of Colorado construction defect law with a client-centered approach. We offer:
                            </p>
                            <ul className="list-disc text-xl text-gray-900 ml-8 my-4 space-y-2">
                                <li>Responsive communication with a focus on your goals</li>
                                <li>Strategic legal advocacy in negotiations, mediation, and litigation</li>
                                <li>Results-driven representation to protect your property rights</li>
                            </ul>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                Whether you are pursuing a claim against a builder, contractor, subcontractor, or developer, our construction defect attorney will work tirelessly to hold them accountable and help you recover the compensation you deserve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About