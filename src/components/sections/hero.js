import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { BsPlayCircle } from "react-icons/bs"
import { useState } from "react"
import FsLightbox from "fslightbox-react"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    const [toggler, setToggler] = useState(false)
    return (
        <section>
            <div className="relative isolate bg-hero bg-cover bg-no-repeat lg:h-screen">
                <div className="h-full max-w-6xl mx-auto flex items-center justify-between p-2">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{siteMetaData.title}</h1>
                        <p className="mt-6 text-2xl leading-8">{siteMetaData.tagline}</p>
                    </div>
                    <div className="bg-profile bg-no-repeat w-96 h-96 lg:h-3/5 bg-cover flex items-center rounded-md">
                        <BsPlayCircle size={64} className="text-primary animate-pulse mx-auto mt-48 hover:cursor-pointer" onClick={() => setToggler(!toggler)}/>
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