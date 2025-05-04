import * as React from "react";
import { Link } from "gatsby";
import { Dropdown } from "flowbite-react";
import { useStaticQuery, graphql } from "gatsby";

/*  
  `placement` defaults to "bottom-start" so drop‑downs
  open directly beneath their trigger. Desktop passes nothing,
  mobile drawer explicitly passes bottom‑start.
*/
export default function HeaderMenu({ placement = "bottom-start", onClick }) {
  const data = useStaticQuery(graphql`
    {
      allContentfulTypesOfProjects(sort: { title: ASC }, limit: 4) {
        edges { node { title slug } }
      }
      allContentfulTypesOfClaims(sort: { title: ASC }, limit: 6) {
        edges { node { title slug } }
      }
    }
  `);

  return (
    <>
      {/* Who We Are -------------------------------------------------- */}
      <div className="mobile-item">
        <Dropdown inline label="Who We Are" placement={placement}>
          <Dropdown.Item>
            <Link
              to="/about-the-firm"
              onClick={onClick}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
            >
              About the Firm
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              to="/w-neal-hollington"
              onClick={onClick}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
            >
              W. Neal Hollington, Esq.
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/* Types of Projects ------------------------------------------ */}
      <div className="mobile-item">
        <Dropdown inline label="Types of Projects" placement={placement}>
          {data.allContentfulTypesOfProjects.edges.map(({ node }) => (
            <Dropdown.Item key={node.slug}>
              <Link
                to={`/types-of-projects/${node.slug}`}
                onClick={onClick}
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
              >
                {node.title}
              </Link>
            </Dropdown.Item>
          ))}
          <Dropdown.Item>
            <Link
              to="/types-of-projects"
              onClick={onClick}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
            >
              View All
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/* Types of Claims -------------------------------------------- */}
      <div className="mobile-item">
        <Dropdown inline label="Types of Claims" placement={placement}>
          {data.allContentfulTypesOfClaims.edges.map(({ node }) => (
            <Dropdown.Item key={node.slug}>
              <Link
                to={`/types-of-claims/${node.slug}`}
                onClick={onClick}
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
              >
                {node.title}
              </Link>
            </Dropdown.Item>
          ))}
          <Dropdown.Item>
            <Link
              to="/types-of-claims"
              onClick={onClick}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
            >
              View All
            </Link>
          </Dropdown.Item>
        </Dropdown>
      </div>

      {/* Resources --------------------------------------------------- */}
      <div className="mobile-item">
        <Dropdown inline label="Resources" placement={placement}>
          <Dropdown.Item>
            <Link
              to="/articles"
              onClick={onClick}
              className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary mx-2"
            >
              Articles
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

      {/* Schedule Consultation -------------------------------------- */}
      <div className="mobile-item">
        <Link
          to="/schedule-consultation"
          onClick={onClick}
          className="text-lg font-semibold leading-6 text-gray-900 hover:text-primary"
        >
          Schedule Consultation
        </Link>
      </div>
    </>
  );
}