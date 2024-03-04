import * as React from "react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const LandingPageProcess = ({timeline}) => {
    const { ref, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const [activeTab, setActiveTab] = useState(0)

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
                        <div className="flex flex-col md:flex-row gap-8 shadow-lg p-8 rounded-lg h-full">
                            {/* Tabs */}
                            <ul className="flex flex-col text-left md:w-2/4 xl:w-1/4 max-h-48 overflow-y-auto md:max-h-full md:pr-4 md:border-r-2 border-gray-100 min-h-[275px]">
                                {timeline.map((event) => {
                                    return (
                                        <li className={activeTab === event.id ? "bg-primary  text-white text-lg md:text-xl font-semibold p-4 my-1 rounded-lg" : "hover:shadow-lg hover:bg-primary hover:text-white hover:rounded-lg text-lg md:text-xl font-semibold p-4 my-1 hover:cursor-pointer"} key={event.id} onClick={() => setActiveTab(event.id)} >{`${event.id + 1}. ${event.point}`}</li>                    
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

export default LandingPageProcess