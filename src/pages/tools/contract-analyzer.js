import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

/**
 * contract-analyzer.js  (nested in src/pages/tools/)
 * ---------------------------------------------------
 * Dedicated landing page for the Contractor Clause Analyzer.
 * The iframe now uses **responsive height classes** instead of a
 * fixed aspect‑ratio padding trick, giving mobile users a taller
 * viewport and eliminating inner scrollbars.
 * ---------------------------------------------------
 */

const ContractAnalyzerPage = () => (
  <Layout>
    <section className="my-4 py-8 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl text-gray-900 text-center mb-4">
        Contract Analyzer
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Upload your construction contract and receive a plain‑English report that flags arbitration,
        warranty‑waiver, indemnity, and other high‑risk clauses&nbsp;— in under five minutes.
      </p>

      {/* ─────────── Analyzer Embed ─────────── */}
      <div className="rounded-lg overflow-hidden shadow-inner">
        <iframe
          title="Contractor Clause Analyzer"
          src="https://app--hollington-law-firm-contract-analyz-1722c986.base44.app/" // replace if you map a custom domain
          className="w-full h-[90vh] md:h-[900px] lg:h-[800px] xl:h-[700px] border-0"
          loading="lazy"
          allow="clipboard-write"
        />
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center max-w-2xl mx-auto">
        Disclaimer: Use of this tool does not create an attorney–client relationship. Results are informational only. For tailored legal advice, <a href="/contact" className="underline">schedule a consult</a>.
      </p>
    </section>
  </Layout>
);

export default ContractAnalyzerPage;

export const Head = () => <Seo title="Contract Analyzer" />;
