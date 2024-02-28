import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"

const HeaderMenu = ({placement}) => {

    return (            
        <>
            <Dropdown
                inline
                label="About"
                placement={placement}
            >
                <Dropdown.Item key="about the firm"><Link to={`/about-the-firm`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">About the Firm</Link></Dropdown.Item>

                <Dropdown.Item key="W. Neal Hollington"><Link to={`/w-neal-hollington`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">W. Neal Hollington, Esq.</Link></Dropdown.Item>

                <Dropdown.Item key="Pro Bono Representation"><Link to={`/pro-bono-representation`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Pro Bono Representation</Link></Dropdown.Item>

            </Dropdown>

            <Link to={`/practice-areas`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Practice Areas</Link>

            <Dropdown
                inline
                label="Resources"
                placement={placement}
            >
                <Dropdown.Item key="Schedule Consultation"><Link to="/articles" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Articles</Link></Dropdown.Item>

            </Dropdown>
            
            <Dropdown
                inline
                label="Schedule Consultation"
                placement={placement}
            >

                <Dropdown.Item key="Schedule Consultation"><Link to="/client-intake-form" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Client Intake Form</Link></Dropdown.Item>

                <Dropdown.Item key="Schedule Consultation"><Link to="/schedule-consultation" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Schedule Consultation</Link></Dropdown.Item>

            </Dropdown>
        </>

    )
}

export default HeaderMenu