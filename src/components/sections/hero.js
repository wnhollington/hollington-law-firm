import * as React from "react"
// import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { BsPlayCircle } from "react-icons/bs"
import { useState } from "react"
import FsLightbox from "fslightbox-react"

const Hero = () => {
    // const siteMetaData = useSiteMetadata()
    const [toggler, setToggler] = useState(false)
    return (
        <section className="relative isolate bg-hero bg-cover bg-no-repeat lg:h-screen">
            <div className="h-full max-w-6xl mx-auto flex items-center justify-between p-2">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Title</h1>
                    <p className="mt-6 text-2xl leading-8">Tagline</p>
                </div>
                <div className="bg-profile bg-no-repeat w-96 h-96 bg-cover flex items-center">
                    <BsPlayCircle size={64} className="text-primary animate-pulse mx-auto mt-48 hover:cursor-pointer" onClick={() => setToggler(!toggler)}/>
                    <FsLightbox 
                        toggler={toggler}
                        className="z-50"
                        sources={[
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero