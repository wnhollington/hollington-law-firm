import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { useInView } from "react-intersection-observer"
import { BsFillTelephoneFill } from "react-icons/bs"

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState)
    }
    const { ref, inView } = useInView({
        threshold: 0
    })
    return (
        <header ref={ref}>
            <div className={`inset-x-0 top-0 z-50 bg-white shadow-md  ${inView ? "relative" : "fixed"}`}>
                {/* Desktop Menu */}
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/"><StaticImage src="../images/logo-web.png"/></Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <AnchorLink to="/#about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</AnchorLink>
                        <AnchorLink to="/#services" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Services</AnchorLink>
                        <AnchorLink to="/#testimonials" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Testimonials</AnchorLink>  
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="tel:303.909.1227" className="flex gap-2 bg-primary p-3 rounded-lg phone text-md font-semibold leading-6 text-gray-200 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">
                            <BsFillTelephoneFill size={22}/>
                            <span>303-909-1127</span>
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className={isOpen ? "flex" : "hidden"} role="dialog" aria-modal="true">
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
                                    <AnchorLink to="/#about" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">About</AnchorLink>

                                    <AnchorLink to="/#services" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Services</AnchorLink>

                                    <AnchorLink to="/#testimonials" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Testimonials</AnchorLink>

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
                </div>
            </div>
        </header>
    )
}

export default Header