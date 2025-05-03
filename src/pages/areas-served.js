import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useState } from "react";
import { Dropdown } from "flowbite-react";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";
import Sidebar from "../components/sidebar";

const AreasServed = () => {
  const data = useStaticQuery(graphql`
    query queryAreasServed {
      allContentfulAreasServed(sort: { title: ASC }) {
        edges {
          node {
            title
            slug
            metadata {
              tags {
                name
              }
            }
          }
        }
      }
    }
  `);

  const regions = ["Metro Denver", "Northern Colorado", "Southern Colorado"];
  const [activeArea, setActiveArea] = useState();

  const filteredAreas = data.allContentfulAreasServed.edges
    .map((edge) => edge.node)
    .filter((area) =>
      activeArea
        ? area.metadata?.tags?.some((tag) => tag.name === activeArea)
        : true
    );

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
        <div className="lg:w-2/3 max-w-6xl mx-auto">
          <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Areas We Serve
          </h1>

          <div className="mx-4 lg:mx-auto my-8 text-xl text-gray-900 text-justify hyphens-auto">
            <p className="my-8">
              At Hollington Law Firm, LLC, we proudly represent homeowners and
              property owners across Colorado in legal matters involving
              construction defects, insurance disputes, and consumer protection
              claims. Our practice focuses on advocating for individuals—not
              builders, insurers, or corporations—who need help navigating
              complex legal challenges affecting their homes and investments.
            </p>
            <p className="my-8">
              While we’ve outlined many of the regions we serve below, we
              encourage you to contact us even if you don’t see your specific
              location listed. We are set up to service clients throughout
              Colorado, but can also provide you with another local firm that may
              be better suited for your particular legal matter.
            </p>
          </div>

          {/* Main flex container for dropdown + list */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT COLUMN: Dropdown in a styled card */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm sticky top-24">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  Filter by Region
                </h2>
                <Dropdown inline label={activeArea || "Select a Region"}>
                  {regions.map((region) => (
                    <Dropdown.Item
                      key={region}
                      onClick={() => setActiveArea(region)}
                    >
                      {region}
                    </Dropdown.Item>
                  ))}
                  <Dropdown.Item onClick={() => setActiveArea(undefined)}>
                    All Areas
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>

            {/* RIGHT COLUMN: Area list */}
            <div className="md:flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredAreas.length > 0 ? (
                  filteredAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/areas-served/${area.slug}`}
                      className="block px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:text-red-900 transition"
                    >
                      <span className="text-lg font-medium">{area.title}</span>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-600">
                    No areas found for this region.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </Layout>
  );
};

export default AreasServed;

export const Head = () => (
  <Seo
    title="Areas Served"
    description="Hollington Law Firm is a Colorado civil litigation firm. From housing & construction defects to personal injury and consumer fraud, the firm has the knowledge, passion, and resources to fight on your behalf."
  />
);