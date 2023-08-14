import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { BsFillTelephoneFill } from "react-icons/bs"

const Mobile = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (            

        <nav className={isOpen ? "flex" : "hidden"} role="dialog" aria-modal="true">
            
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                
                <div className="flex items-center justify-between">
                    <StaticImage src="../images/logo-web.png"/>
                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6 mb-6">
                            <Link to="/#about" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</Link>

                            <Link to="/#services" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</Link>

                            <Link to="/#testimonials" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Testimonials</Link>

                        </div>
                        <div className="my-6 py-6">
                            <div className="flex flex-row justify-center phone">
                                <BsFillTelephoneFill size={22}/>
                                <a href="tel:303.909.1227" className="text-md font-semibold leading-6 text-gray-900 hover:text-primary ml-2">303-909-1227</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>

    )
}

export default Mobile