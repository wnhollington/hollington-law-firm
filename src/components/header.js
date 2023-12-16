import * as React from "react"
import Desktop from "./menus/desktop"
import Mobile from "./menus/mobile"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import Logo from "../images/svg/logo.svg"
import { useSiteMetadata } from "../utilities/use-site-metadata"

const Header = () => {
    const siteMetaData = useSiteMetadata()
    // Set Scroll State
    const [scrolled, setScrolled] = useState(false)

    // Change State on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            // Check if Url is on Contact or Schedule Pages
            const url = typeof window !== 'undefined' ? window.location.href : ''
            const urlCheck = url.includes("schedule-consultation") || url.includes("contact") || url.includes("practice-areas") ? true : false
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
        <header>
            <div className={`inset-x-0 top-0 z-50 bg-white shadow-lg transition-all ease-in-out delay-150 ${scrolled === false ? "relative" : "fixed"}`}>
                <div className="flex justify-between items-center py-2 px-2">
                    <Link to="/" aria-label={siteMetaData.title}><Logo style={{width: "325px"}}/></Link>
                    <Desktop/>
                    <Mobile/>
                </div>
            </div>
        </header>
    )
}

export default Header