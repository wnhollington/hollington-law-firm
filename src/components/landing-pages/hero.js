import * as React from "react"
import { Link } from "gatsby"

const LandingPageHero = ({title, tagline, heroImage }) => {
    return (
        <section>
            <div className={`relative isolate ${heroImage} bg-cover bg-no-repeat h-[500px] xl:h-screen`}>
                <div className="h-full w-full bg-neutral-50/70 flex align-center">
                    <div className="flex flex-col justify-center mx-auto max-w-5xl gap-6 p-4">
                        
                        <h1 className="font-['Libre_Baskerville'] text-3xl md:text-4xl lg:text-5xl">{title}</h1>
                        <p className="font-['Source_Sans_Pro'] text-2xl md:text-3xl lg:text-4xl italic">{tagline}</p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            
                            <Link to="/schedule-consultation" className="bg-primary hover:shadow-lg text-white text-md md:text-lg font-bold p-4 rounded-lg text-center">Schedule Your Free Consultation</Link>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPageHero