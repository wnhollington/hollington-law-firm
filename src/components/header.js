import * as React from "react"
import Desktop from "./menus/desktop"
import Mobile from "./menus/mobile"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    // Set Scroll State
    const [scrolled, setScrolled] = useState(false)

    // Change State on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
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
                <div className="flex justify-between items-center py-6 px-2">
                    <Link to="/"><StaticImage src="../images/logo-web.png"/></Link>
                    <Desktop/>
                    <Mobile/>
                </div>
            </div>
        </header>
    )
}

export default Header