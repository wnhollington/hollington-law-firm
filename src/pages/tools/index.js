import * as React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Sidebar from "../../components/sidebar";
import blueprintImg from "../../images/blueprint.webp"; // static asset for first tool
/**
 * tools/index.js
 * ---------------------------------------------------
 * Hub for all interactive apps. Each tool card now includes:
 *   • Background image
 *   • Primary‑color overlay for brand consistency
 *   • Hover zoom / color‑shift animation
 *
 * To add a new tool, push an object into the `tools` array with
 * title, description, path, and image.
 * ---------------------------------------------------
 */

const tools = [
  {
    title: "Contract Analyzer",
    description:
      "Upload your construction contract and get a risk report in minutes.",
    path: "/tools/contract-analyzer", // nested route
    image:blueprintImg
  },
  // Future apps – just add objects ↓
  // {
  //   title: "LienClock – Lien Deadline Calculator",
  //   description: "Compute NOI, lien‑recording & foreclosure dates instantly.",
  //   path: "/tools/lienclock",
  //   image: "/images/tools/lienclock.jpg",
  // },
];

const ToolsPage = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row my-8 p-4 gap-6 justify-center">
        {/* Main content */}
        <div className="lg:w-2/3 max-w-6xl mx-auto">
          <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            Interactive Legal Tools
          </h1>

          <div className="mx-8 lg:mx-auto my-8 text-xl text-gray-900 text-justify hyphens-auto">
            <p>
              Hollington Law Firm builds practical, Colorado‑focused apps that empower
              homeowners and investors to prevent disputes and protect their rights.
            </p>
          </div>

          {/* Tool grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-8 lg:mx-auto my-8">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                to={tool.path}
                className="group relative rounded-2xl overflow-hidden shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/40"
              >
                {/* Background image */}
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Brand‑color overlay */}
                <span className="absolute inset-0 bg-primary/80 group-hover:bg-primary/70 transition-colors duration-300" />

                {/* Text block */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-1 drop-shadow-md">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-gray-100 line-clamp-3 drop-shadow-md">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar (reuses Practice Areas layout) */}
        <Sidebar />
      </div>
    </Layout>
  );
};

export default ToolsPage;

export const Head = () => (
  <Seo
    title="Interactive Legal Tools"
    description="Browse Hollington Law Firm's free calculators and wizards for Colorado construction, lien, and consumer issues."
  />
);
