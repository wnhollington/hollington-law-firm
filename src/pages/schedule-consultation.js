import * as React from "react"
import {InlineWidget} from "react-calendly"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ScheduleConsultation = () => (
  <Layout>
    <div className="my-4 py-4 2xl:h-screen overflow-hidden">
      <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">Schedule Consultation</h1>
      <InlineWidget url="https://calendly.com/wnhollington" />
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