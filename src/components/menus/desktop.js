import * as React from "react"
import { Link } from "gatsby"
import { BsFillTelephoneFill } from "react-icons/bs"

const Desktop = () => {
    return (            
        <>
            <nav className="flex items-center justify-between gap-6 lg:gap-12">

                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/#about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</Link>
                    <Link to="/#services" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Services</Link>
                    <Link to="/#testimonials" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Testimonials</Link>  
                </div>
                
            </nav>

            <div className="hidden lg:flex">
                <a href="tel:303.909.1227" className="flex gap-2 bg-primary p-3 rounded-lg phone text-md font-semibold leading-6 text-gray-200 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">
                    <BsFillTelephoneFill size={22}/>
                    <span>303-909-1127</span>
                </a>
            </div>
        </>

    )
}

export default Desktop