import * as React from "react"
import { Script } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ClientIntakeForm = () => (
  <Layout>
    <div className="w-full flex flex-col items-center my-4 py-4">

      <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Client Intake Form</h1>

      <p className="text-xl font-medium text-gray-900 max-w-5xl mx-8">Thank you very much for giving Hollington Law Firm the opportunity to evaluate your legal matter. This form is part of a process that will allow us to determine whether our firm is the right fit for your matter and to run a conflict check.</p>
      
      <p className="text-xl font-medium text-gray-900 max-w-5xl mx-8 my-4">Please note that you are providing this information to us for the purpose of seeking legal representation, and we will treat this information exchange as an attorney-client communication for the purposes of the attorney-client privilege. Having said that, you acknowledge that Hollington Law Firm does not currently represent you with regard to the matter you present below. By filling out this form, you are providing us with preliminary information that we will use to evaluate whether we will represent you in the future. At this moment, we do not represent you, and we will not provide you with any legal advice, unless and until we execute a written agreement setting forth the terms and conditions for us to formally represent you.</p>
      
      <iframe src="https://www.cognitoforms.com/f/Q994xiyy9k2flH3A_R8bXA/1"  style={{width: "100%"}} height="2773"></iframe>

      <Script src="https://www.cognitoforms.com/f/iframe.js"></Script>

    </div>   
  </Layout>
)

export default ClientIntakeForm

export const Head = () => (
  <Seo 
    title="Client Intake Form"
    description="Thank you very much for giving Hollington Law Firm the opportunity to evaluate your legal matter. This form is part of a process that will allow us to determine whether our firm is the right fit for your matter and to run a conflict check"
  />
)