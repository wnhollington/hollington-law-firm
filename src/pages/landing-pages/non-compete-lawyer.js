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
      Are non-compete agreements holding you back from pursuing new opportunities or advancing your career? You're not alone. In Colorado's competitive job market, these agreements are becoming increasingly prevalent, often leaving employees feeling powerless and trapped in their current positions.
      </p>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      But it doesn't have to be this way. Non-compete agreements are not absolute, and you have rights that deserve to be protected. Whether you're considering signing a new employment contract or are already bound by a restrictive covenant, it's essential to understand that you have rights and options.
      </p>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      At Hollington Law Firm, we have represented many employees like you in challenging non-compete agreements and asserting your rights under Colorado law. With our expertise and dedication, we'll help you navigate the complexities of these agreements and work towards a favorable resolution that allows you to pursue your career goals with confidence.
      </p>
      <p className="text-xl text-gray-900 text-justify hyphens-auto my-4 lg:mx-4">
      Don't let non-compete agreements hold you back any longer. Contact us today to schedule your consultation and unlock the full potential of your career.
      </p>

    </>
  )
  const timeline = [
    {id: 0, point: "Legal Consultation", description: "The process begins with an initial consultation with your attorney. You'll meet with your attorney who will go through the details of your case with you. They'll ask you questions about your employment, any contracts or other documents you may have signed, and other important facts and circumstances. They'll make sure you fully understand the process and what to expect from start to finish."},
    
    {id: 1, point: "Investigation", description: "After you retain us, we will get to work right away. We will perform a thorough investigation of your case. We will review all documents concerning your employment and speak with any necessary witnesses that help bolster your defense."},
      
    {id: 2, point: "Strategize", description: "Every case is unique, which means each strategy is also unique and highly customized. Sometimes we it is best to wait to see whether your employer sends a cease and desist letter after your termination of employment. Other times, it may be beneficial to be the first mover to challenge the enforceability of your noncompete agreement. In each situation, our team uses cutting-edge technology, advanced resources, and extensive experience to plan each and every step of a client’s case strategy."},
    
    {id: 3, point: "Negotiations", description: "Pre-suit negotiations and settlement discussions offer numerous benefits within the realm of employee non-compete agreements. By engaging in these proactive steps, both parties have the opportunity to reach a mutually beneficial resolution without the time-consuming and costly process of litigation. Through open dialogue and negotiation, employees can often secure favorable modifications or releases from overly restrictive agreements, allowing them to pursue new career opportunities with confidence and freedom."},
    
    {id: 4, point: "Suit and Trial", description: "If an agreement with your employer cannot be obtained, then we will prepare for trial. Though, statistically, most cases do settle, we always prepare each and every case as if a trial will occur to ensure that you have the best defense and are able to obtain the best results possible."}
  ]

  return (
    <>
      {/* Header */}
      <LandingPageHeader />

      {/* Main */}
      <main>

        {/* Hero */}
        <LandingPageHero 
          title="Shackled by a Non-Compete Agreement?" 
          tagline="We Empower Colorado Employees to Pursue Their Career Goals"
          heroImage="bg-landing-non-compete"
        />

        {/* About */}
        <LandingPageAbout
          heading={'Colorado Non-Compete Lawyer'}
          content={content} 
        />

        {/* Issues We Handle */}
        <IssuesWeHandle
          issueDescription={"At Hollington Law Firm, we have represented many clients who have been in your shoes. Over the years, we have seen and litigated the gamut of non-compete issues in Colorado. From alleged trade secrets to buy-sell agreements, we are well equipped to defend you in your non-compete matter."}
          issues={['Trade Secrets and Confidential Information','Executive and Management Positions', 'Purchase and Sale Agreements', 'Confidentiality and Non-Disclosure Provisions', 'Educational and Training Expenses', 'Scholarship Requirements', 'Breach of Contracts', 'Misappropriation of Trade Secrets', 'And More']}
        />

        <LandingPageProcess 
          timeline={timeline}
        />

        <WhatSetsUsApart />

        <Testimonials />

        <LandingPageSchedule 
          closingDescription={"Don't let non-compete agreements hold you back any longer. Contact us today to schedule your consultation and unlock the full potential of your career. With Hollington Law Firm, you're not just a client — you're a partner in your journey towards empowerment and success. Let us be your advocate in the fight against unjust non-compete agreements."}
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
    title="Non Compete Lawyer"
  />
)
