import * as React from "react"
import { useInView } from "react-intersection-observer"
import {StaticImage} from "gatsby-plugin-image"

const About = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="about" ref={ref}>
            <div className={`container my-12 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <div>
                    <h2 className="text-center text-3xl mb-2 font-medium">Who We Are</h2>
                    <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <div className="lg:flex lg:flex-row lg:max-h-[400px] xl:max-h-[500px] text-center">
                        <div className="lg:w-1/3">
                            <StaticImage src="https://images.ctfassets.net/irf9uehwbpr8/zc4u3SXWOXh9ZEQZPDefu/dc7bbd11b81f570f48a131f6131804ea/e1eqadzarq4bjsapvwgy-Bio_Image_Enhanced.webp" alt="W. Neal Hollington, Esq."/>
                        </div>
                        <div className="lg:w-2/3 lg:max-h-full overflow-y-scroll">
                            <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
                            Construction defects can turn your dream home or investment into a nightmare. From structural issues to poor craftsmanship, these problems can jeopardize your safety and financial well-being. As a Colorado construction defect law firm, we understand the stress and frustration that comes with discovering construction defects. As a homeowner or property investor, you deserve to have your rights protected and your concerns addressed promptly.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            Don't let construction defects undermine your investment. They can lead to costly repairs, decreased property value, and even health hazards for you and your loved ones. Without legal intervention with a qualified construction defect lawyer, resolving these issues can be daunting and financially draining.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            Imagine finally moving into your newly constructed home, only to discover water leaks, structural issues, or poor workmanship. What was meant to be your sanctuary becomes a source of stress and frustration. This scenario is all too common for homeowners facing construction defects in Colorado.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            Fortunately, you don't have to face these challenges alone. At Hollington Law Firm, we specialize in Colorado construction defect law. With years of experience and a deep understanding of the complexities involved, our construction defect law firm is here to advocate for your rights and help you navigate the legal process.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            Our team will work tirelessly to protect your interests and hold negligent parties accountable. Whether you're dealing with design flaws, material defects, or construction delays, we have the knowledge and resources to pursue the compensation you deserve.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            Don't wait until it's too late. Contact us today for a free consultation. We'll assess your case, outline your options, and provide expert guidance every step of the way. With our proven track record of success, you can trust us to fight for the justice you deserve.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default About