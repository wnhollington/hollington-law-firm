import * as React from "react"
import { useInView } from "react-intersection-observer"
import Desktop from "./menus/desktop"
import Mobile from "./menus/mobile"

const Header = () => {
    const { ref, inView } = useInView({
        threshold: 0
    })
    return (
        <header ref={ref}>
            <div className={`inset-x-0 top-0 z-50 bg-white shadow-md  ${inView ? "relative" : "fixed"}`}>
                <Desktop/>
                <Mobile/>
            </div>
        </header>
    )
}

export default Header