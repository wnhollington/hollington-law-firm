import * as React from "react"
import { useInView } from "react-intersection-observer"

const About = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })
    return (
        <section id="about" ref={ref}>
            <div className={`container my-12 animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <div>
                    <h2 className="text-center text-3xl mb-2 font-medium">Construction Issue?</h2>
                    <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <p className="text-xl text-gray-900 my-4 text-justify">
                        Are you a home owner facing construction defects from a builder or contractor? Are you a subcontractor not getting paid for your hard work on a construction project? Maybe you are a laborer that has been injured on a jobsite or are experiencing a wage dispute with your employer. If you fit into any of these categories of issues, you have probably come to this website frustrated and seeking answers.
                    </p>
                    <p className="text-xl text-gray-900 my-4 text-justify">
                        Unfortunately, navigating the legal process without representation is a huge challenge. Statutes, rules, and deadlines can make it seemingly impossible to handle your legal issues on your own. Worse, there is a lot of misinformation out there and it can be equally as difficult to find a qualified attorney to competently handle your construction dispute.
                    </p>
                </div>
                <div className="mt-12">
                    <h2 className="text-center text-3xl  mb-2 font-medium">Help Starts Here</h2>
                    <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                    <p className="text-xl text-gray-900 my-4 text-justify">
                        I share your frustrations as I have been where you are. I have experienced construction defects as a consumer and employment issues as a employee. I understand the frustration that can come with not knowing your legal rights. Since becoming a licensed attorney, I have dedicated my practice to construction-related disputes. I have worked with and have defended some of the biggest builders, insurance carriers, and employers in the nation. Now, I represent homeowners, subcontractors, small businesses, consumers, and employees like yourself in claims against them. I understand their tactics and strategies, can help you effectively resolve your construction-related disputes, and get you the best possible results and peace of mind.
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default About