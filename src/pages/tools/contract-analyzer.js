import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

/**
 * ContractAnalyzerPage.jsx
 * ---------------------------------------------------
 * Dedicated landing page for the Contractor Clause Analyzer.
 * Embeds the Base44 app via iframe and includes basic copy,
 * disclaimer, and SEO metadata. Drop into src/pages/contract-analyzer.js
 * or adjust the route to your preference.
 * ---------------------------------------------------
 */

const ContractAnalyzerPage = () => {
  return (
    <Layout>
      <div className="my-4 py-8 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl text-gray-900 text-center mb-4">
          Contract Analyzer
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
          Upload your construction contract and receive a plain‑English report that flags arbitration,
          warranty‑waiver, indemnity, and other high‑risk clauses&nbsp;— in under five minutes.
        </p>

        {/* ─────────── Analyzer Embed ─────────── */}
        <div className="">
          <div className="relative w-full pb-[75%] md:pb-[56.25%] rounded-lg overflow-hidden shadow-inner">
            <iframe
              title="Contractor Clause Analyzer"
              src="https://app--hollington-law-firm-contract-analyz-1722c986.base44.app/"  /* Replace with actual Base44 URL or custom domain */
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              allow="clipboard-write"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContractAnalyzerPage

export const Head = () => <Seo title="Contract Analyzer" />;
