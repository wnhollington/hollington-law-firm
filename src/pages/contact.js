import * as React from "react"
import { Script } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <div className="w-full flex flex-col items-center my-4 py-4">
      <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Get in Touch</h1>
      <p className="text-xl font-medium text-gray-900 max-w-2xl mx-8">Thank you for your interest in contacting our firm. Please fill out the below form and a representative will be in touch shortly.</p>
      {/* Start Lawmatics Embedded Snippet */}
      <div id="lm-embedded-script"></div>
      <Script id="lm-embedded-script" dangerouslySetInnerHTML={{ __html: `!function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5),lm_intake("1e53ea02-d778-4cd6-882c-d96152846adf");`}} />
      {/* End Lawmatics Embedded Snippet */}
    </div>   
  </Layout>
)

export default Contact

export const Head = () => (
  <Seo 
    title="Contact"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
)