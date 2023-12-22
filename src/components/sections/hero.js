import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { BsPlayCircle } from "react-icons/bs"
import { useState } from "react"
import FsLightbox from "fslightbox-react"
import { Link } from "gatsby"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    const [toggler, setToggler] = useState(false)
    return (
        <section>
            <div className="relative isolate bg-hero bg-cover bg-no-repeat h-[500px] md:h-screen">
                <div className="h-full w-full bg-neutral-50/70 flex align-center">
                    <div className="flex flex-col justify-center mx-auto max-w-5xl gap-6 p-4">
                        
                        <h1 className="font-['Libre_Baskerville'] text-3xl md:text-4xl lg:text-5xl">{siteMetaData.description}</h1>
                        <p className="font-['Source_Sans_Pro'] text-2xl md:text-3xl lg:text-4xl">{siteMetaData.tagline}</p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            
                            <Link to="/schedule-consultation" className="bg-primary hover:shadow-lg text-white text-md md:text-lg font-bold p-4 rounded-lg text-center">Schedule Your Free Consultation</Link>
                            
                            <button className="flex flex-row items-center justify-center bg-primary hover:shadow-lg text-white text-md md:text-lg font-bold p-4 rounded-lg" onClick={() => setToggler(!toggler)}>
                                <BsPlayCircle size={28} className="text-white animate-pulse hover:cursor-pointer mr-4" />
                                <p>Watch Intro Video</p>
                            </button>

                        </div>

                    </div>
                </div>
            </div>
            <FsLightbox 
                toggler={toggler}
                sources={[
                    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
            />
        </section>
    )
}

export default Hero