import * as React from "react"
import { Link } from "gatsby"
import { Dropdown } from "flowbite-react"

const HeaderMenu = ({placement}) => {

    return (            
        <>
            <Dropdown
                inline
                label="Who We Are"
                placement={placement}
            >
                <Dropdown.Item key="about the firm"><Link to={`/about-the-firm`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">About the Firm</Link></Dropdown.Item>

                <Dropdown.Item key="W. Neal Hollington"><Link to={`/w-neal-hollington`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">W. Neal Hollington, Esq.</Link></Dropdown.Item>

            </Dropdown>

            <Link to={`/practice-areas/construction-defect-lawyer`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Construction Defects</Link>

            <Dropdown
                inline
                label="Resources"
                placement={placement}
            >
                <Dropdown.Item key="Articles"><Link to="/articles" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Articles</Link></Dropdown.Item>
                <Dropdown.Item key="Ebook"><Link to="/homeowners-guide-to-residential-construction-defects-free-download" className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">Ebook</Link></Dropdown.Item>

            </Dropdown>

            <Link to={`/schedule-consultation`}className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">Schedule Consultation</Link>
            
        </>

    )
}

export default HeaderMenu