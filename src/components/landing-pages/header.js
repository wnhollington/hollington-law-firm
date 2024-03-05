import * as React from "react"
import { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../../utilities/use-site-metadata"
import { FaStar, FaPhone } from "react-icons/fa";

const LandingPageHeader = () => {
    const siteMetaData = useSiteMetadata()
    // Set Scroll State
    const [scrolled, setScrolled] = useState(false)

    // Change State on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            // Check if Url is on Contact or Schedule Pages
            const url = typeof window !== 'undefined' ? window.location.href : ''
            const urlCheck = url.includes("contact") ? true : false
            if ((isScrolled !== scrolled) & (urlCheck === false)) {
                setScrolled(!scrolled)
            }
        }
        document.addEventListener('scroll', handleScroll, {passive: true})

        return () => {
            // Clean up event handler when the component unmounts
            document.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])
    
    return (
        <header className="">
            <div className={`inset-x-0 top-0 z-50 bg-white shadow-lg transition-all ease-in-out delay-150 ${scrolled === false ? "relative" : "fixed"}`}>
                <div className="flex justify-between items-center py-2 px-2">
                    
                    <StaticImage src="../../images/logo.webp" width={300} alt="Hollington Law Firm, LLC"/>

                    <div className="hidden lg:flex flex-row gap-12 items-center">
                        <StaticImage src="../../images/accolades/Asset 2@4x.png" height={45} alt="Best Lawyers" />
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-center items-center">
                                <FaStar size={24} color="#FDDF00"/>
                                <FaStar size={24} color="#FDDF00"/>
                                <FaStar size={24} color="#FDDF00"/>
                                <FaStar size={24} color="#FDDF00"/>
                                <FaStar size={24} color="#FDDF00"/>
                            </div>
                            <p className="text-lg font-semibold leading-6 text-gray-900">Google Reviews</p>
                        </div>
                    </div>
                    
                    <div className="lg:flex hidden md:block">
                        <a href={`tel:${siteMetaData.contact.phone}`} className="flex flex-row items-center gap-2 text-primary font-semibold text-xl">
                            <FaPhone /><span>{siteMetaData.contact.phone}</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LandingPageHeader