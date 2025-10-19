import React, { useState, useMemo } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Sidebar from "../components/sidebar";

const TypesOfClaims = () => {
  const data = useStaticQuery(graphql`
    query queryTypesOfClaims {
      allContentfulTypesOfClaims(sort: { title: ASC }) {
        nodes {
          title
          slug
          claimCategory {
            claimCategory
          }
        }
      }
    }
  `);

  const allClaims = data.allContentfulTypesOfClaims.nodes;

  // Narrative order for categories
  const categoryOrder = [
    "Structural & Site Conditions",
    "Water Intrusion & Building Envelope",
    "Mechanical, Electrical & Plumbing",
    "Materials, Design & Code Compliance",
    "Environmental & Health Hazards",
    "Transactional & Consumer Issues",
  ];

  const orderIndex = (name) => {
    const i = categoryOrder.indexOf(name || "");
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };

  const categories = useMemo(() => {
    const set = new Set(
      allClaims
        .map((c) => c.claimCategory?.claimCategory)
        .filter((t) => typeof t === "string" && t.length > 0)
    );
    return Array.from(set).sort((a, b) => orderIndex(a) - orderIndex(b));
  }, [allClaims]);

  const [activeCategory, setActiveCategory] = useState(undefined);

  const counts = useMemo(() => {
    const map = {};
    categories.forEach((cat) => {
      map[cat] = allClaims.filter(
        (c) => c.claimCategory?.claimCategory === cat
      ).length;
    });
    return map;
  }, [allClaims, categories]);

  const pills = useMemo(() => {
    return [
      { label: "All", value: undefined, count: allClaims.length },
      ...categories.map((cat) => ({ label: cat, value: cat, count: counts[cat] || 0 })),
    ];
  }, [allClaims.length, categories, counts]);

  const filteredClaims = useMemo(() => {
    return allClaims
      .filter((c) =>
        activeCategory ? c.claimCategory?.claimCategory === activeCategory : true
      )
      .sort((a, b) => {
        const aCat = a.claimCategory?.claimCategory;
        const bCat = b.claimCategory?.claimCategory;
        const byCat = orderIndex(aCat) - orderIndex(bCat);
        if (byCat !== 0) return byCat;
        return a.title.localeCompare(b.title);
      });
  }, [allClaims, activeCategory]);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
        <div className="lg:w-2/3 max-w-6xl mx-auto">
          <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            All Claim Types
          </h1>

          <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify hyphens-auto">
            <p>
              Welcome to our construction defect claims page. Hollington Law Firm, LLC is one of the few Colorado law firms that handles construction defect and consumer complaints on behalf of Colorado home and property owners. Below are the types of construction defect claims we regularly get involved in. If you don’t see your particular issue, please reach out—we can often help or refer you to the right attorney.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 text-sm font-bold">
                      🔎
                    </span>
                    <h2 className="text-base font-semibold text-gray-900">Filter by Category</h2>
                  </div>

                  {activeCategory && (
                    <button
                      type="button"
                      onClick={() => setActiveCategory(undefined)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition"
                      aria-label="Clear category filter"
                    >
                      ✕ Clear
                    </button>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-4">
                  Choose a category to narrow results. “All” shows everything.
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {pills.map((p) => {
                    const selected = activeCategory === p.value || (!activeCategory && p.value === undefined);
                    return (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setActiveCategory(p.value)}
                        className={`group relative w-full rounded-full border px-4 py-2 text-sm text-left transition ${
                          selected
                            ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                            : "border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        aria-pressed={selected}
                        aria-label={`Filter by ${p.label}`}
                      >
                        <span className="inline-flex items-center justify-between w-full">
                          <span className="pr-3">{p.label}</span>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                {filteredClaims.length > 0 ? (
                  filteredClaims.map((claim) => (
                    <Link
                      key={claim.slug}
                      to={`/types-of-claims/${claim.slug}`}
                      className="group block rounded-2xl ring-1 ring-gray-200 bg-white px-4 py-8 text-lg font-semibold leading-6 text-gray-900 shadow-sm hover:shadow-md transition hover:ring-gray-300"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {claim.title}
                        <span className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition">→</span>
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-600">No claim types found.</p>
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

export default TypesOfClaims;

export const Head = () => (
  <Seo
    title="Types of Construction Defect Claims We Handle"
    description="Hollington Law Firm is a leading Colorado construction defect law firm that handles claims on behalf of Colorado home and property owners."
  />
);