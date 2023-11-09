import * as React from "react"
import { BsFillTelephoneFill } from "react-icons/bs"
import HeaderMenu from "./header-menu"

const Desktop = () => {
    return (            
        <>
            <nav className="flex items-center justify-between gap-6 lg:gap-12 header-navigation">

                <div className="hidden lg:flex lg:gap-x-12">
                    <HeaderMenu />
                </div>
                
            </nav>

            <div className="hidden lg:flex">
                <a href="tel:303.909.1227" className="flex items-center gap-2 bg-primary p-3 rounded-lg phone text-lg font-semibold leading-6 text-gray-100 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">
                    Call Now
                </a>
            </div>
        </>

    )
}

export default Desktop