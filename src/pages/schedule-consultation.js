import * as React from "react"
import { Script } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ScheduleConsultation = () => (
  <Layout>
    <div className="my-4 py-4 2xl:h-screen overflow-hidden">
      <h1 className="mb-12 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">Schedule Consultation</h1>
      {/* Start Lawmatics Embedded Snippet */}
      <div id="lm-embedded-script"></div>
      <Script id="lm-embedded-script" dangerouslySetInnerHTML={{ __html: `!function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5),lm_intake("be59a2ca-303f-45ac-86cd-f57999971623");`}} />
      {/* End Lawmatics Embedded Snippet */}
    </div>
  </Layout>
)

export default ScheduleConsultation

export const Head = () => (
  <Seo 
    title="Schedule Consultation"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
)