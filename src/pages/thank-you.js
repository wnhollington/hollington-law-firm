import * as React from "react"
import { BsCheck2Circle } from "react-icons/bs";
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <div className="w-full flex flex-col items-center my-4 py-4 h-screen overflow-scroll">
      <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Get in Touch</h1>
      <div className="mt-12 flex flex-col gap-4 justify-center items-center">
        <BsCheck2Circle size={80} color="#3C8D2F"/>
        <p className="text-3xl font-medium text-gray-900">Thank You!</p>
        <p className="text-xl font-medium text-gray-900">Your form submission has been sent and received.</p>
        <p className="text-xl font-medium text-gray-900">A representative will be in touch shortly.</p>
      </div>
    </div>   
  </Layout>
)

export default Contact

export const Head = () => (
  <Seo 
    title="Contact"
  />
)