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
        {id: 0, point: "Legal Consultation", description: "The process begins with an initial consultation with your Colorado construction defect lawyer. You'll meet with your attorney who will go through the details of your case with you. They'll ask you questions about your property or project, the contractor(s) and subcontractor(s) on the project, and the defects/deficiencies you have noticed to date. They'll make sure you fully understand the process and what to expect from start to finish."},
    
        {id: 1, point: "Investigation", description: "After you retain us, we will get to work right away. We will perform a thorough investigation of your case. We will review all documents concerning the project, schedule an initial inspection of the property, and retain necessary experts to evaluate the defects/deficiencies noticed to date."},
          
        {id: 2, point: "Notice of Claim", description: "Under Colorado law, a homeowner is required to serve a construction professional with notice of the alleged defects/deficiencies prior to initiating a lawsuit. This is commonly referred to as the 'Notice of Claim Process'. To abide by this statutory requirement, our construction defect law firm will draft and serve all contractors and subcontractors with a notice of claim, detailing the defects/deficiencies noticed to date, along with supporting documentation from any retained experts."},
    
        {id: 3, point: "Property Inspection", description: "Upon receiving the notice of claim, any contractors or subcontractors retained for the project are entitled to inspect the property. During this time period, they may conduct inspections, assessments, and evaluations to better understand the nature and the scope of the alleged defects."},
        
        {id: 4, point: "Negotiations", description: "After the property inspection is performed, the contractor(s) and subcontractor(s) may make a written offer to either repair the defects/deficiencies or settle the claim for a monetary amount. At this point, negotiations will ensue. We will work with the responsible parties and any insurance carriers involved to see if we can resolve the matter in lieu of filing a lawsuit."},
        
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
                        "https://images.ctfassets.net/irf9uehwbpr8/6XXlN5FHyyjEFaBygvH2f1/7b3233b851b612119e6f99798142cf07/pijwvmzqmulmxpocc3iq.webp"
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
                        <div className="flex flex-col md:flex-row gap-8 shadow-lg p-8 rounded-md h-full">
                            {/* Tabs */}
                            <ul className="flex flex-col text-left md:w-2/4 xl:w-1/4 max-h-48 overflow-y-auto md:max-h-full md:pr-4 md:border-r-2 border-gray-100 min-h-[275px]">
                                {timeline.map((event) => {
                                    return (
                                        <li className={activeTab === event.id ? "bg-gradient-to-b from-primary to-red-800 text-white text-lg md:text-2xl font-semibold p-4 my-1 rounded-md" : "hover:shadow-lg hover:bg-gradient-to-br from-primary to-red-800 hover:text-white hover:rounded-md text-lg md:text-2xl font-semibold p-4 my-1 hover:cursor-pointer"} key={event.id} onClick={() => setActiveTab(event.id)} >{`${event.id + 1}. ${event.point}`}</li>                    
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