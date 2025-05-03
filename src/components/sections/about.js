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
                        At Hollington Law Firm, we advocate for Colorado homeowners and property investors facing the devastating impact of construction defects. We help hold negligent builders, contractors, and developers accountable when their work falls short of industry standards or legal obligations. We understand how frustrating, overwhelming, and financially draining it can be to discover serious issues in what should be your safe haven or valuable investment—and we’re here to fight for your rights every step of the way.
                    </p>
                    <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                        Our firm represents clients dealing with a wide range of construction defects, including:
                    </p>
                    <ul className="list-disc text-xl text-gray-900 ml-8 my-4 space-y-2">
                        <li><strong>Water intrusion and leaks</strong> that damage walls, ceilings, and foundations</li>
                        <li><strong>Foundation cracks and structural failure</strong> that jeopardize the safety and stability of the home</li>
                        <li><strong>Roofing and stucco defects</strong> leading to moisture problems, deterioration, and costly repairs</li>
                        <li><strong>Poor workmanship and incomplete construction</strong> that leave homes unfinished or below acceptable standards</li>
                        <li><strong>Defective design or materials</strong> that result in ongoing problems or expensive replacements</li>
                    </ul>
                    <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                        We’ll investigate your case, work with qualified experts to evaluate the defects, and build a strong legal claim to hold the responsible parties accountable. Our goal is to pursue the compensation you deserve so you can repair the damage, protect your property value, and move forward with peace of mind.
                    </p>
                    <p className="text-xl text-gray-900 my-4 lg:mx-4 hyphens-auto">
                        Don’t wait until the damage worsens or your legal rights are jeopardized. Contact Hollington Law Firm today for a free consultation and find out how we can help protect your home and investment.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default About