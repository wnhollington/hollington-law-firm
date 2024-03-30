import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SidebarProfile = () => {

    return (

            <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 rounded-md flex flex-col align-center shadow-xl">
                
                <StaticImage src="https://images.ctfassets.net/irf9uehwbpr8/zc4u3SXWOXh9ZEQZPDefu/dc7bbd11b81f570f48a131f6131804ea/e1eqadzarq4bjsapvwgy-Bio_Image_Enhanced.webp" alt="W. Neal Hollington, Esq." className="rounded-md"/>
                
                <h3 className="text-gray-900 text-center text-2xl my-6">Contact Now for Legal Help</h3>
                
                <Link to="/schedule-consultation" className="bg-gradient-to-br from-primary to-red-800 hover:shadow-lg text-white text-md sm:text-lg font-bold p-4 rounded-md text-center">Schedule Your Free Consultation</Link>

            </div>

    )
}

export default SidebarProfile

