import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { BsPlayCircle } from "react-icons/bs"
import { useState } from "react"
import FsLightbox from "fslightbox-react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    const [toggler, setToggler] = useState(false)
    return (
        <section>
            <div className="relative isolate bg-hero bg-cover bg-no-repeat xl:h-screen">
                <div className="h-full max-w-full flex flex-col-reverse sm:flex-row items-center md:justify-around p-2 md:gap-10 bg-red-100/60">
                    <div className="xl:text-center my-4">
                        <h1 className="font-['Libre_Baskerville'] text-3xl md:text-4xl lg:text-5xl max-w-2xl">{siteMetaData.tagline}</h1>
                        <div className="flex flex-row my-2 md:my-6">
                            <Link to="/schedule-consultation" className="bg-primary hover:shadow-lg text-white text-md md:text-lg font-bold p-4 rounded-lg">Schedule Your Free Consultation</Link>
                            <BsPlayCircle size={64} className="text-primary animate-pulse hover:cursor-pointer mx-auto" onClick={() => setToggler(!toggler)}/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <StaticImage 
                            src="https://res.cloudinary.com/wnhollington/image/upload/e_improve:outdoor,g_face/e1eqadzarq4bjsapvwgy.jpg"
                            className="relative"
                            alt="Altitude Injury Law"
                        />
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