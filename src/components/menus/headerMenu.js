import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"

const HeaderMenu = ({placement}) => {
    return (            
        <>
            <Link to="/about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</Link>
            <Dropdown
                inline
                label="Cases We Handle"
                placement={placement}
            >
            </Dropdown>
            <Dropdown
                inline
                label="Resources"
                placement={placement}
            >
            </Dropdown>
            <Link to="/contact" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Contact</Link>
        </>

    )
}

export default HeaderMenu