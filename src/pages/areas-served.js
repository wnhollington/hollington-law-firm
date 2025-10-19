import React, { useState, useMemo } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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

  const allAreas = useMemo(() => data.allContentfulAreasServed.edges.map((e) => e.node), [data]);

  const counts = useMemo(() => {
    const map = {};
    regions.forEach((r) => {
      map[r] = allAreas.filter((a) => a.metadata?.tags?.some((t) => t.name === r)).length;
    });
    return map;
  }, [allAreas, regions]);

  const pills = useMemo(() => {
    return [
      { label: "All", value: undefined, count: allAreas.length },
      ...regions.map((r) => ({ label: r, value: r, count: counts[r] || 0 })),
    ];
  }, [allAreas.length, regions, counts]);

  const filteredAreas = useMemo(() => {
    return allAreas.filter((area) =>
      activeArea ? area.metadata?.tags?.some((tag) => tag.name === activeArea) : true
    );
  }, [allAreas, activeArea]);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
        <div className="lg:w-2/3 max-w-6xl mx-auto">
          <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Areas We Serve
          </h1>

          <div className="mx-4 lg:mx-auto my-8 text-xl text-gray-900 text-justify hyphens-auto">
            <p className="my-8">
              At Hollington Law Firm, LLC, we proudly represent homeowners and property owners across Colorado in legal matters involving construction defects, insurance disputes, and consumer protection claims. Our practice focuses on advocating for individuals—not builders, insurers, or corporations—who need help navigating complex legal challenges affecting their homes and investments.
            </p>
            <p className="my-8">
              While we’ve outlined many of the regions we serve below, we encourage you to contact us even if you don’t see your specific location listed. We are set up to service clients throughout Colorado, but can also provide you with another local firm that may be better suited for your particular legal matter.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 text-sm font-bold">
                      🔍
                    </span>
                    <h2 className="text-base font-semibold text-gray-900">Filter by Region</h2>
                  </div>

                  {activeArea && (
                    <button
                      type="button"
                      onClick={() => setActiveArea(undefined)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
                      aria-label="Clear region filter"
                    >
                      ✕ Clear
                    </button>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-4">Choose a region to narrow results. “All” shows everything.</p>

                <div className="grid grid-cols-1 gap-2">
                  {pills.map((p) => {
                    const selected = activeArea === p.value || (!activeArea && p.value === undefined);
                    return (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setActiveArea(p.value)}
                        className={`group relative w-full rounded-full border px-4 py-2 text-sm transition ${
                          selected
                            ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                            : "border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        aria-pressed={selected}
                        aria-label={`Filter by ${p.label}`}
                      >
                        <span className="inline-flex items-center justify-center gap-2">
                          {p.label}
                          <span
                            className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold ${
                              selected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {p.count}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="md:flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                {filteredAreas.length > 0 ? (
                  filteredAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/areas-served/${area.slug}`}
                      className="group block rounded-2xl ring-1 ring-gray-200 bg-white px-4 py-8 text-lg font-semibold leading-6 text-gray-900 shadow-sm hover:shadow-md transition hover:ring-gray-300"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {area.title}
                        <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-600">No areas found for this region.</p>
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