import * as React from "react"
import { BsFillTelephoneFill} from "react-icons/bs"
import HeaderMenu from "./headerMenu"

const Mobile = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (            
        <>
            <div className="flex lg:hidden">
                <button type="button" className="inline-flex items-center justify-center rounded-md  text-gray-700" onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            <nav className={isOpen ? "flex" : "hidden"} role="dialog" aria-modal="true">

                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    
                    <button type="button" className="-m-4 rounded-md text-gray-700 float-right relative top-6" onClick={toggleMenu}>
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 mb-6 header-navigation">
                                <HeaderMenu placement="right-start"/>
                            </div>
                            <div className="my-6 py-6">
                                <div className="flex flex-row justify-center phone">
                                    <a href="tel:303.909.1227" className="flex gap-2 bg-primary p-3 rounded-lg phone text-md font-semibold leading-6 text-gray-100 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">
                                        <BsFillTelephoneFill size={"1.25em"} className="fill-gray-100"/>
                                        <span>Call Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Mobile