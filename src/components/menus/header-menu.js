import * as React from "react";
import { Link } from "gatsby";
import { Dropdown } from "flowbite-react";

export default function HeaderMenu({ placement = "bottom-start", onClick }) {

  return (
    <>
      {/* Who We Are */}
      <div className="mobile-item">
        <Dropdown inline label="Who We Are" placement={placement}>
          <Dropdown.Item>
            <Link to="/about-the-firm" onClick={onClick} className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">
              About the Firm
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/w-neal-hollington" onClick={onClick} className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">
              W. Neal Hollington, Esq.
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/* What We Do */}
      <div className="mobile-item">
        <Link
          to={`/colorado-construction-defect-lawyer`}
          onClick={onClick}
          className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary"
        >What We Do</Link>
      </div>

      {/* Resources */}
      <div className="mobile-item">
        <Dropdown inline label="Resources" placement={placement}>
          <Dropdown.Item>
            <Link to="/articles" onClick={onClick} className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">
              Articles
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/tools" onClick={onClick} className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">
              Tools
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              to="/homeowners-guide-to-residential-construction-defects-free-download"
              onClick={onClick}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
            >
              Ebook
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/* Schedule Consultation */}
      <div className="mobile-item">
        <Link to="/schedule-consultation" onClick={onClick} className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary">
          Schedule Consultation
        </Link>
      </div>
    </>
  );
}