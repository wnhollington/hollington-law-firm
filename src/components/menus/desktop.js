import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { BsFillTelephoneFill } from "react-icons/bs"

const Desktop = () => {
    return (            

        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link to="/"><StaticImage src="../images/logo-web.png"/></Link>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/#about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</Link>
                <Link to="/#services" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Services</Link>
                <Link to="/#testimonials" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Testimonials</Link>  
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="tel:303.909.1227" className="flex gap-2 bg-primary p-3 rounded-lg phone text-md font-semibold leading-6 text-gray-200 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">
                    <BsFillTelephoneFill size={22}/>
                    <span>303-909-1127</span>
                </a>
            </div>
        </nav>
            

    )
}

export default Desktop