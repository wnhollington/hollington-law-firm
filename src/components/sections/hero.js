import * as React from "react"
import { useSiteMetadata } from "../../utilities/use-site-metadata"

const Hero = () => {
    const siteMetaData = useSiteMetadata()
    return (
        <section className="relative isolate bg-hero bg-cover bg-no-repeat lg:h-screen">
            <div className="w-full h-full bg-grey-100/90 backdrop-brightness-75">
                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"></h1>
                        <p className="mt-6 text-2xl leading-8 text-white"></p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero