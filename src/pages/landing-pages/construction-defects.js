import * as React from "react"

// Components
import Seo from "../../components/seo"
import LandingPageHeader from "../../components/landing-pages/header"
import LandingPageHero from "../../components/landing-pages/hero"
import LandingPageAbout from "../../components/landing-pages/about"
import IssuesWeHandle from "../../components/landing-pages/issues-we-handle"
import LandingPageProcess from "../../components/landing-pages/process"
import WhatSetsUsApart from "../../components/sections/what-sets-us-apart"
import Testimonials from "../../components/sections/testimonials"
import LandingPageSchedule from "../../components/landing-pages/schedule"
import LandingPageFooter from "../../components/landing-pages/footer"

const ConstructionDefects = () => {
  const content = (
    <>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      Construction defects can turn your dream home or investment into a nightmare. From structural issues to poor craftsmanship, these problems can jeopardize your safety and financial well-being.
      </p>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      At Hollington Law Firm, we understand the stress and frustration that comes with discovering construction defects. As a homeowner or property investor, you deserve to have your rights protected and your concerns addressed promptly.
      </p>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      Imagine investing your life savings into a property, only to discover severe structural flaws that compromise its safety and value. This was the reality for many of our clients. But with our expertise and dedication, we've helped them navigate the complex legal landscape of construction defect claims in Colorado.
      </p>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      We've seen firsthand how daunting it can be to pursue justice against powerful construction companies. However, with our experienced team by your side, you can transform uncertainty into confidence. We'll fight tirelessly to hold negligent parties accountable and ensure you receive the compensation you deserve.
      </p>

    </>
  )
  const timeline = [
    {id: 0, point: "Legal Consultation", description: "The process begins with an initial consultation with your construction defect lawyer. You'll meet with your attorney who will go through the details of your case with you. They'll ask you questions about your property or project, the contractor(s) and subcontractor(s) on the project, and the defects/deficiencies you have noticed to date. They'll make sure you fully understand the process and what to expect from start to finish."},
    
    {id: 1, point: "Investigation", description: "After you retain us, we will get to work right away. We will perform a thorough investigation of your case. We will review all documents concerning the project, schedule an initial inspection of the property, and retain necessary experts to evaluate the defects/deficiencies noticed to date."},
      
    {id: 2, point: "Notice of Claim", description: "Under Colorado law, a homeowner is required to serve a construction professional with notice of the alleged defects/deficiencies prior to initiating a lawsuit. This is commonly referred to as the 'Notice of Claim Process'. To abide by this statutory requirement, we will draft and serve all contractors and subcontractors with a notice of claim, detailing the defects/deficiencies noticed to date, along with supporting documentation from any retained experts."},

    {id: 3, point: "Property Inspection", description: "Upon receiving the notice of claim, any contractors or subcontractors retained for the project are entitled to inspect the property. During this time period, they may conduct inspections, assessments, and evaluations to better understand the nature and the scope of the alleged defects."},
    
    {id: 4, point: "Negotiations", description: "After the property inspection is performed, the contractor(s) and subcontractor(s) may make a written offer to either repair the defects/deficiencies or settle the claim for a monetary amount. At this point, negotiations will ensue. We will work with the responsible parties and any insurance carriers involved to see if we can resolve the matter in lieu of filing a lawsuit."},
    
    {id: 5, point: "Suit and Trial", description: "If the insurance carrier or at fault party continue to devalue your case and a resolution cannot be reached, we will file a complaint on your behalf and take the case to trial. Though, statistically, most cases do settle, we always prepare each and every case as if a trial will occur to ensure that you receive full value for your case."}
  ]

  return (
    <>
      {/* Header */}
      <LandingPageHeader />

      {/* Main */}
      <main>

        {/* Hero */}
        <LandingPageHero 
          title="Dealing with Construction Defects in Colorado?" 
          tagline="Don't face the big builders and insurance companies alone. Schedule your free consultation with a seasoned construction defect lawyer today."
          heroImage="bg-landing-construction-defect"
        />

        {/* About */}
        <LandingPageAbout
          heading={'Colorado Construction Defect Lawyer'}
          content={content} 
        />

        {/* Issues We Handle */}
        <IssuesWeHandle
          issueDescription={"At Hollington Law Firm, we specialize in representing property owners in claims against builders and contractors. Over the years, we have seen and litigated the gamut of construction defects in Colorado. From roofing issues to grading concerns, there is no property issue that we are not equipped to handle."}
          issues={['Expansive Soils', 'Roofing', 'Windows and Doors', 'Balconies and Decks', 'Grading and Drainage', 'Water Intrusion', 'Foundations', 'Plumbing Problems', 'Electrical Issues', 'HVAC Systems', 'Poor Framing', 'Finish and Cosmetic Defects']}
        />

        <LandingPageProcess 
          timeline={timeline}
        />

        <WhatSetsUsApart />

        <Testimonials />

        <LandingPageSchedule 
          closingDescription={"Don't fight the big builders and insurance companies on your own. Instead, partner with a trusted Colorado construction defect lawyer to secure the financial compensation you are owed. We have resolved many construction defect claims and lawsuits, securing for our clients compensation necessary to repair their properties. Don't let construction defects undermine your investment or compromise your safety. Contact us today for a free consultation and take the first step towards resolving your construction defect claim."}
        />

      </main>

      {/* Footer */}
      <LandingPageFooter />
    </>
  )
}

export default ConstructionDefects

export const Head = () => (
  <Seo 
    title="Construction Defects Lawyer"
  />
)
