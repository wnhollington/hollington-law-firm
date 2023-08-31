import * as React from "react"
import {InlineWidget} from "react-calendly"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ScheduleConsultation = () => (
  <Layout>
    <div className="my-2 py-4">
      <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Schedule Consultation</h1>
      <InlineWidget url="https://calendly.com/wnhollington" />
    </div>
  </Layout>
)

export default ScheduleConsultation

export const Head = () => (
  <Seo 
    title="Schedule Consultation"
  />
)