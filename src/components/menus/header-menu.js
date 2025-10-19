import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Dropdown } from "flowbite-react";

export default function HeaderMenu({ placement = "bottom-start", onClick }) {
  const data = useStaticQuery(graphql`
    {
      allContentfulPracticeAreas(
        filter: {
          slug: { in: [
            "construction-defect-lawyer",
            "remodeling-disputes",
            "contractor-lien-colorado",
            "real-estate-fraud"
          ] }
        }
      ) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  // desired order
  const order = [
    "construction-defect-lawyer",
    "contractor-disputes",
    "contractor-lien-colorado",
    "real-estate-fraud",
  ];

  // sort by the order array; anything not in the list goes to the end
  const items = [...data.allContentfulPracticeAreas.nodes].sort((a, b) => {
    const ia = order.indexOf(a.slug);
    const ib = order.indexOf(b.slug);
    return (ia === -1 ? Number.MAX_SAFE_INTEGER : ia) -
           (ib === -1 ? Number.MAX_SAFE_INTEGER : ib);
  });

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
        <Dropdown inline label="What We Do" placement={placement}>
          {items.map((node) => (
            <Dropdown.Item key={node.slug}>
              <Link
                to={`/practice-areas/${node.slug}`}
                onClick={onClick}
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
              >
                {node.title}
              </Link>
            </Dropdown.Item>
          ))}
          <Dropdown.Item>
            <Link to="/practice-areas" onClick={onClick} className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2">
              View All
            </Link>
          </Dropdown.Item>
        </Dropdown>
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