import * as React from "react"
import HeaderMenu from "./header-menu"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { FaPhone } from "react-icons/fa6";

const Desktop = () => {
    const siteMetaData = useSiteMetadata()
    return (            
        <>
            <nav className="flex items-center justify-between gap-6 lg:gap-12 header-navigation">

                <div className="hidden lg:flex lg:gap-x-12">
                    <HeaderMenu />
                </div>
                
            </nav>

            <div className="hidden lg:flex">
                <a href={`tel:${siteMetaData.contact.phone}`} className="flex flex-row items-center gap-2 bg-gradient-to-r from-primary to-red-800 text-white text-xl p-2 rounded-md hover:shadow-lg">
                    <FaPhone /><span>{siteMetaData.contact.phone}</span>
                </a>
            </div>
        </>

    )
}

export default Desktop