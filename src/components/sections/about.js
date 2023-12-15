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
            <div className={`container my-12 lg:my-24 xl:my-2 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <div>
                    <h2 className="text-center text-3xl mb-2 font-medium">Denver Personal Injury Lawyer</h2>
                    <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <div className="lg:flex lg:flex-row lg:max-h-[500px] text-center">
                        <div className="lg:w-1/3">
                            <StaticImage src="https://res.cloudinary.com/wnhollington/image/upload/e_improve,e_sharpen/f_auto/q_auto/v1699606613/e1eqadzarq4bjsapvwgy.webp" alt="W. Neal Hollington, Esq."/>
                        </div>
                        <div className="lg:w-2/3 lg:max-h-full overflow-y-scroll">
                            <p className="text-xl text-gray-900 text-justify hyphens-auto m-4">
                            Life can change dramatically in the blink of an eye. Accidents, whether on the bustling streets of Denver or in the serene landscapes of Colorado's countryside, bring with them a tidal wave of pain and confusion. The physical injuries, the emotional toll, and the mounting medical bills can feel like an insurmountable mountain to climb. It's in these moments of vulnerability that you need a trusted ally, someone who understands the intricacies of personal injury law right here in Colorado.
                            </p>
                            <p className="text-xl text-gray-900 text-justify m-4 hyphens-auto">
                            The emotional aftermath of an accident can be just as profound as the physical injuries. Anxiety, depression, and the strain on relationships often follow. The simplest tasks become monumental challenges, and the road to recovery seems endless. It's a dark tunnel, and finding the light can feel like an impossible task without the right support.
                            </p>
                            <p className="text-xl text-gray-900 text-justify m-4 hyphens-auto">
                            I'm sure you’ve seen a lot of personal injury law firms advertising on TV or plastered across billboards.  Most of those firms accept every case they can find and then settle them cheaply and fast, one after another.  Every client is just a number to be worked through the system as fast as possible, with minimal involvement from anyone who actually has a law degree.  Those firms are called “mills” because they grind out case after case.
                            </p>
                            <p className="text-xl text-gray-900 text-justify m-4 hyphens-auto">
                            We’re different.  We take fewer cases.  We focus on winning the maximum amount for the individual clients we serve.  When you call our office, you can speak with the actual personal injury attorney working on your case.  We care about our clients.  We get to know them.  We know that what we do can make a big difference in our client’s lives and the lives of their family members. We put maximum effort into being the best personal injury lawyers in Denver.
                            </p>
                            <p className="text-xl text-gray-900 text-justify m-4 hyphens-auto">
                            If you want a law firm to take your personal injury case, assign it a number, then settle it cheaply and fast with minimal effort by any actual personal injury lawyer, then you have dozens of law firms to choose from.  If you want individual attention and hard work to maximize the value of your case, let’s talk.  We believe in doing real work on real personal injury cases.  Our firm takes a relatively small number of cases so that we can fight hard for the clients we represent.  If we’re unable to take your case, we can almost always suggest another personal injury law firm that can. You only get one chance at this. Let's make it count.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default About