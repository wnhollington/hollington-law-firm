import * as React from "react"
import { BsCheck2Circle } from "react-icons/bs";
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ThankYou = () => (
  <Layout>
    <div className="w-full flex flex-col items-center my-4 py-4 h-screen overflow-hidden">
      <div className="mt-12 flex flex-col gap-4 justify-center items-center mx-8">
        <BsCheck2Circle size={80} color="#3C8D2F"/>
        <h1 className="text-3xl font-medium text-gray-900 text-center">Thanks For Reaching Out!</h1>
        <p className="text-xl font-medium text-gray-900">Your form submission has been sent and received. Please check your email for your complimentary E-Book.</p>
      </div>
    </div>   
  </Layout>
)

export default ThankYou

export const Head = () => (
  <Seo 
    title="Form Submission Received"
  />
)