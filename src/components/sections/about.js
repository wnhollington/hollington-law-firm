import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"

const About = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="about" ref={ref}>
            <div className={`container my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <div className="flex flex-col justify-around lg:flex-row gap-12 px-8">
                    <div className="flex flex-col max-w-2xl">
                        <h2 className="text-center text-3xl font-semibold mb-2">Colorado Handyman Services</h2>
                        <div className="w-10 mx-auto border-b-4 border-blue-800 mb-8"></div>
                        <p className="text-lg text-gray-500">
                            Welcome to Stellar Property Services LLC! My name is Tyler Whitley and I am the owner of Stellar Property Services LLC. I am a lifelong resident of Elizabeth, Colorado and am thrilled to serve the local community and surrounding area with professional handyman services. We specialize in smaller household projects and general labor. From painting and drywall repair to updating vanities, light fixtures, and switches, we are well suited to tackle any of your home improvement or renovation projects.
                        </p>
                    </div>
                    <StaticImage 
                        src=""
                        placeholder="blurred"
                        className="rounded-lg"
                    />
                </div>
            </div>
            
        </section>
    )
}

export default About