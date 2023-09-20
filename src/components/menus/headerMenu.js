import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"

const HeaderMenu = ({placement}) => {
    return (            
        <>
            <Link to="/about-me" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">About</Link>
            <Dropdown
                inline
                label="Practice Areas"
                placement={placement}
            >
                <Dropdown.Item><Link to="/construction-contract-lawyer" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Construction Contracts</Link></Dropdown.Item>

                <Dropdown.Item><Link to="/construction-defect-lawyer" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Construction Defects</Link></Dropdown.Item>

                <Dropdown.Item><Link to="/contractor-lien-colorado" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Construction Collections</Link></Dropdown.Item>

                <Dropdown.Item><Link to="/real-estate-fraud-lawyer" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Real Estate Fraud and Nondisclosure</Link></Dropdown.Item>
            </Dropdown>
            {/* <Dropdown
                inline
                label="Resources"
                placement={placement}
            >
                <Dropdown.Item>Articles</Dropdown.Item>
                <Dropdown.Item>Videos</Dropdown.Item>
                <Dropdown.Item>E-Books</Dropdown.Item>
            </Dropdown> */}
            <Dropdown
                inline
                label="Contact"
                placement={placement}
            >
                <Dropdown.Item><Link to="/contact" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Contact</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/schedule-consultation" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Schedule Consultation</Link></Dropdown.Item>
            </Dropdown>
        </>

    )
}

export default HeaderMenu