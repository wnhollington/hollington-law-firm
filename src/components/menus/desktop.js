import * as React from "react"
import { Link } from "gatsby"
import { BsFillTelephoneFill, BsChevronDoubleDown } from "react-icons/bs"
import { Dropdown } from "flowbite-react"

const Desktop = () => {
    return (            
        <>
            <nav className="flex items-center justify-between gap-6 lg:gap-12 header-navigation">

                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</Link>
                    <Dropdown
                        inline
                        label="Cases We Handle"
                    >
                    </Dropdown>
                    <Dropdown
                        inline
                        label="Resources"
                    >
                    </Dropdown>
                    <Link to="/contact" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Contact</Link>
                </div>
                
            </nav>

            <div className="hidden lg:flex">
                <a href="tel:303.909.1227" className="flex gap-2 bg-primary p-3 rounded-lg phone text-md font-semibold leading-6 text-gray-100 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">
                    <BsFillTelephoneFill size={"1.25em"} className="fill-gray-100"/>
                    <span>303-909-1127</span>
                </a>
            </div>
        </>

    )
}

export default Desktop