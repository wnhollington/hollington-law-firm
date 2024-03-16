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
                            Construction defects can turn your dream home or investment into a nightmare. From structural issues to poor craftsmanship, these problems can jeopardize your safety and financial well-being. At Hollington Law Firm, we understand the stress and frustration that comes with discovering construction defects. As a homeowner or property investor, you deserve to have your rights protected and your concerns addressed promptly.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            If you live in the Denver Metropolitan Area, then you have surely seen lots of law firms advertising on TV or plastered across billboards. In legal circles, we refer to these firms as "mills" because they grind out case and case, settling them for less than they are typically worth. These firms tend to accept every case they can find and then settle them cheaply and fast, one after another. The end result is that those firms may make a lot of money, but it is often to the detriment of the clients they are suppose to be serving.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            At Hollington Law Firm, we're different. Instead of signing up cases with an eye towards settling them quickly and cheaply, we take fewer cases and focus our efforts on winning the maximum amount for our clients. We care about our clients and treat them like our own family. With Hollington Law Firm, you will never be treated as just another number or file. Although, we cannot promise or guarantee you results, with us, you will always be timely updated and treated with the the care and attention that you and your case deserves.
                            </p>
                            <p className="text-xl text-gray-900 text-justify my-4 lg:mx-4 hyphens-auto">
                            If you want a law firm to take your case, assign it a number, then settle it cheaply and fast, then you have dozens of other law firms to choose from.  That's not us. If you want individual attention and hard work to maximize the value of your case, let’s talk. <span className="font-semibold">You only get one chance at this. Let's make it count.</span>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default About