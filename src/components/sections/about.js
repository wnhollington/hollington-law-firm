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
                                At Hollington Law Firm, we focus exclusively on representing homeowners and property owners as a <strong>Colorado construction defect law firm</strong>. Led by attorney Neal Hollington, a dedicated and experienced <strong>construction defect lawyer</strong>, our firm is committed to helping clients hold negligent builders, contractors, and developers accountable for defective construction and poor workmanship.
                            </p>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                We understand that construction defects can disrupt your life, reduce your property’s value, and lead to costly repairs. That’s why we provide personalized legal representation to guide you through every step of the claims process.
                            </p>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                Our <strong>construction defect attorney</strong> helps clients with claims involving:
                            </p>
                            <ul className="list-disc text-xl text-gray-900 ml-8 my-4 space-y-2">
                                <li><strong>Structural defects</strong> (foundation issues, framing problems, load-bearing failures)</li>
                                <li><strong>Water intrusion, leaks, and mold</strong> due to improper construction</li>
                                <li><strong>Roofing defects and building envelope failures</strong></li>
                                <li><strong>Defective windows, doors, and siding installations</strong></li>
                                <li><strong>Poor workmanship and code violations</strong></li>
                            </ul>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                At Hollington Law Firm, we combine deep knowledge of Colorado construction defect law with a client-centered approach. We offer:
                            </p>
                            <ul className="list-disc text-xl text-gray-900 ml-8 my-4 space-y-2">
                                <li><strong>Responsive communication</strong> with a focus on your goals</li>
                                <li><strong>Strategic legal advocacy</strong> in negotiations, mediation, and litigation</li>
                                <li><strong>Results-driven representation</strong> to protect your property rights</li>
                            </ul>
                            <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                                Whether you are pursuing a claim against a builder, contractor, subcontractor, or developer, our <strong>construction defect attorney</strong> will work tirelessly to hold them accountable and help you recover the compensation you deserve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About