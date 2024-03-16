import * as React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <div className="w-full flex flex-col items-center my-4 py-4 2xl:h-screen overflow-hidden">
      <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Get in Touch</h1>
      <p className="text-xl font-medium text-gray-900 max-w-xl mx-8">Thank you for your interest in contacting our firm. Please fill out the below form and a representative will be in touch shortly.</p>
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        data-netlify-recaptcha="true" 
        action="/thank-you" 
        className="bg-white py-6 lg:px-28 px-8"
      >
          <input type="hidden" name="form-name" value="contact"/>
          <div className="flex flex-wrap items-center mt-12">
              <div className="w-full xl:w-72 flex flex-col">
                  <label htmlFor="name" className="text-base font-semibold leading-none text-gray-800">Name</label>
                  <input type="text" name="name" id="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
              </div>
              <div className="w-full xl:w-72 flex flex-col xl:ml-6 xl:mt-0 mt-4">
                  <label htmlFor="email" className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                  <input type="email" name="email" id="email" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
              </div>
          </div>
          <div className="md:flex items-center mt-8">
              <div className="md:w-full flex flex-col md:mt-0 mt-4">
                  <label htmlFor="subject" className="text-base font-semibold leading-none text-gray-800">Subject</label>
                  <input type="text" name="subject" id="subject" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
              </div>
          </div>
          <div>
              <div className="w-full flex flex-col mt-8">
                  <label htmlFor="message" className="text-base font-semibold leading-none text-gray-800">Message</label>
                  <textarea type="text" name="message" id="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
              </div>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <p className="text-sm leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, <Link to="/privacy-policy" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">privacy policy</Link> and how we use data as stated</p>
          <div className="flex items-center justify-center w-full">
              <button type="submit" name="submit" id="submit" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary hover:bg-primary rounded hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none w-full">SUBMIT</button>
          </div>
      </form> 
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