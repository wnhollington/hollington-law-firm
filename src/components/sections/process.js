import * as React from "react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Process = () => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const [activeTab, setActiveTab] = useState(0)

    const timeline = [
        {id: 0, point: "Legal Consultation", description: "The process begins when you go in for your free consultation. You'll meet with your attorney who will go through the details of your case with you. They'll ask you questions about what happened, any treatment you've already received, and other important contexts. They'll make sure you fully understand the process and what to expect from start to finish."},
        {id: 1, point: "Investigation", description: "After you retain us, we will get to work right away. We will perform a thorough investigation of your case. This includes obtaining any reports, records, witness statements and more."},
        {id: 2, point: "Strategize", description: "Every case is unique, which means each strategy is also unique and highly customized. Sometimes we may file a lawsuit right away, other times we may wait until the right time to do so. In each situation, our team uses cutting-edge technology, advanced resources, and extensive experience to plan each and every step of a client’s case strategy."},
        {id: 3, point: "Demand", description: "Once the details of your case are sorted, your attorney will draft a demand letter to the insurance company or the at fault party. Demand letters usually include details like: (1) an analysis of the facts of the matter, (2) an analysis of legal liability, and (3) a demand for monetary compensation."},
        {id: 4, point: "Negotiations", description: "After a demand letter is sent, negotiations will ensue. For personal injury matters, the insurance company will respond to your demand by either accepting or denying the claim. For other matters, either the at fault party or their own attorney will respond. Most often, the other party will usually offer a figure that is much lower than is needed. This is where we will step in and argue for full compensation on your behalf."},
        {id: 5, point: "Suit and Trial", description: "If the insurance carrier or at fault party continue to devalue your case and a resolution cannot be reached, we will file a complaint on your behalf and take the case to trial. Though, statistically, most cases do settle, we always prepare each and every case as if a trial will occur to ensure that you receive full value for your case."}
    ]

    return (
        <section id="process" ref={ref}>
            <div className={`container my-16 lg:my-24 text-center animated animatedFadeInUp ${inView ? 'fadeInUp' : null}`}>
                <h2 className="text-center text-3xl font-medium mb-2">What to Expect</h2>
                <div className="w-10 mx-auto border-b-4 border-primary mb-8"></div>
                <div style={{ display: "grid" }}>
                    {/* You can use a GatsbyImage component if the image is dynamic */}
                    <StaticImage
                        style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                        // maxHeight: 600,
                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                        aspectRatio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt=""
                        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                        src={
                        "https://res.cloudinary.com/wnhollington/image/upload/v1699606613/pijwvmzqmulmxpocc3iq.webp"
                        }
                        formats={["auto", "webp", "avif"]}
                        className="rounded-lg"
                    />
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        display: "grid",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        <div className="flex flex-col md:flex-row gap-8 shadow-lg p-8 rounded-lg h-full">
                            {/* Tabs */}
                            <ul className="flex flex-col text-left md:w-2/4 xl:w-1/4 max-h-48 overflow-y-auto md:max-h-full md:pr-4 md:border-r-2 border-gray-100 min-h-[275px]">
                                {timeline.map((event) => {
                                    return (
                                        <li className={activeTab === event.id ? "bg-primary  text-white text-lg md:text-2xl font-semibold p-4 my-1 rounded-lg" : "hover:shadow-lg hover:bg-primary hover:text-white hover:rounded-lg text-lg md:text-2xl font-semibold p-4 my-1"} key={event.id} onClick={() => setActiveTab(event.id)}>{`${event.id + 1}. ${event.point}`}</li>                    
                                    )
                                })}
                            </ul>
                            {/* Content */}
                            <div className="md:w-2/4 xl:w-3/4 text-gray-900 text-xl text-justify hyphens-auto">
                                {timeline[activeTab].description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process