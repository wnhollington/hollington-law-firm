import * as React from "react"
import { useInView } from "react-intersection-observer"
import {StaticImage} from "gatsby-plugin-image"

const LandingPageAbout = ({heading, content}) => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="about" ref={ref}>
            <div className={`container my-12 lg:my-24 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <div>
                    <h2 className="text-center text-3xl mb-2 font-medium">{heading}</h2>
                    <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <div className="lg:flex lg:flex-row lg:max-h-[400px] text-center">
                        <div className="lg:w-1/3">
                            <StaticImage src="https://images.ctfassets.net/irf9uehwbpr8/zc4u3SXWOXh9ZEQZPDefu/dc7bbd11b81f570f48a131f6131804ea/e1eqadzarq4bjsapvwgy-Bio_Image_Enhanced.webp" 
                                alt="W. Neal Hollington, Esq."
                                placeholder="blurred"
                                layout="constrained"
                                height={375}
                            />
                        </div>
                        <div className="lg:w-2/3 lg:max-h-full overflow-y-scroll">
                            {content}
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default LandingPageAbout