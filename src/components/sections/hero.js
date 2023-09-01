import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { BsPlayCircle } from "react-icons/bs"
import { useState } from "react"
import FsLightbox from "fslightbox-react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    const [toggler, setToggler] = useState(false)
    return (
        <section>
            <div className="relative isolate bg-hero bg-cover bg-no-repeat 2xl:h-screen">
                <div className="h-full max-w-full flex flex-col-reverse sm:flex-row items-center md:justify-around p-2 md:gap-10">
                    <div className="text-center">
                        <h1 className="hidden">{siteMetaData.title}</h1>
                        <p className="text-3xl md:text-4xl lg:text-5xl max-w-2xl">{siteMetaData.tagline}</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <StaticImage 
                            src="../../images/neal.png"
                            className="relative top-8"
                        />
                        <BsPlayCircle size={64} className="text-primary animate-pulse hover:cursor-pointer mx-auto relative bottom-48" onClick={() => setToggler(!toggler)}/>
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