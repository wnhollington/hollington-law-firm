import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const ClientIntakeForm = () => {
  const [referral, setReferral] = useState(false)
  const [adverseIsBusiness, setAdverseIsBusiness] = useState(false)

  return (
    <Layout>
      <div className="w-full flex flex-col items-center my-4 py-4">

        <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Client Intake Form</h1>

        <p className="text-xl font-medium text-gray-900 max-w-5xl mx-8">Thank you very much for giving Hollington Law Firm the opportunity to evaluate your legal matter. This form is part of a process that will allow us to determine whether our firm is the right fit for your matter and to run a conflict check.</p>
        
        <p className="text-xl font-medium text-gray-900 max-w-5xl mx-8 my-4">Please note that you are providing this information to us for the purpose of seeking legal representation, and we will treat this information exchange as an attorney-client communication for the purposes of the attorney-client privilege. Having said that, you acknowledge that Hollington Law Firm does not currently represent you with regard to the matter you present below. By filling out this form, you are providing us with preliminary information that we will use to evaluate whether we will represent you in the future. At this moment, we do not represent you, and we will not provide you with any legal advice, unless and until we execute a written agreement setting forth the terms and conditions for us to formally represent you.</p>

        {/* Begin Intake Form */}
        <form name="client-intake-form" method="POST" data-netlify="true" action="/thank-you" className="max-w-5xl mx-8">
            <input type="hidden" name="form-name" value="client-intake-form"/>
            
            {/* Personal Information*/}
            <div className="my-8">
                <h2 className="semibold text-xl border-b-2 border-b-slate-900">Personal Information</h2>
                  
                  {/* Name */}
                  <fieldset className="my-6">
                    <legend className="font-semibold">Name <span className="text-primary">*</span></legend>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex flex-col my-2 sm:w-1/2">
                        <label htmlFor="firstName" className="text-base leading-none text-gray-800">First Name</label>
                        <input type="text" name="firstName" id="firstName" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                      </div>

                      <div className="flex flex-col my-2 sm:w-1/2">
                        <label htmlFor="lastName" className="text-base leading-none text-gray-800">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                      </div>
                    </div>

                  </fieldset>
                  
                  {/* Address */}
                  <fieldset className="my-6">
                    <legend className="font-semibold">Address <span className="text-primary">*</span></legend>
                    
                    <div className="flex flex-col gap-4">

                      <div>
                        <label htmlFor="addressLine1" className="text-base leading-none text-gray-800">Address Line 1</label>
                        <input type="text" name="addressLine1" id="addressLine1" className="mt-2 w-full text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                      </div>

                      <div>
                        <label htmlFor="addressLine2" className="text-base leading-none text-gray-800">Address Line 2</label>
                        <input type="text" name="addressLine2" id="addressLine2" className="mt-2 w-full text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100"/>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="city" className="text-base leading-none text-gray-800">City</label>
                          <input type="text" name="city" id="city" className="mt-2 text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                        </div>
                        
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="state" className="text-base leading-none text-gray-800">State</label>
                          <select name="state" id="state" className="mt-2 h-12 text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required>
                            <option value=""></option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
                        </div>
                        
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="zipCode" className="text-base leading-none text-gray-800">Zip Code</label>
                          <input type="text" name="zipCode" id="zipCode" className="mt-2 text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                        </div>
                      </div>

                    </div>

                  </fieldset>

                  {/* Email, Phone, DOB */}
                  <fieldset className="my-6">
                    
                    <legend className="font-semibold">Contact Information <span className="text-primary">*</span></legend>
                      
                      <div className="flex flex-col md:flex-row gap-4 mt-4">
                        
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="email" className="text-base leading-none text-gray-800">Email Address</label>
                          <input type="email" name="email" id="email" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                        </div>

                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="phoneNumber" className="text-base leading-none text-gray-800">Phone Number</label>
                          <input type="tel" name="phoneNumber" id="phoneNumber" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                        </div>

                      </div>

                  </fieldset>
            </div>
            
            {/* Nature of Legal Issue */}
            <div className="my-8">
                <h2 className="semibold text-xl border-b-2 border-b-slate-900">Nature of Legal Issue</h2>

                <div className="my-6">
                  <label htmlFor="descriptionOfCase" className="text-base font-semibold leading-none text-gray-800">Please provide a brief description of the case. <span className="text-primary">*</span></label>
                  <textarea type="descriptionOfCase" name="descriptionOfCase" id="descriptionOfCase" className="mt-2 h-36 w-full text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
                </div>

                  {/* Adverse Party Name */}
                  <fieldset className="my-6">
                    <legend className="font-semibold">Name of Defendant or Adverse Party<span className="text-primary">*</span></legend>

                    <div className="flex flex-col md:flex-row gap-2 mt-6">

                      <p>Is the defendant or adverse party an individual or a business entity?</p>
                      
                      <div className="flex flex-row items-center gap-1 md:ml-6">
                        <input type="radio" name="adverseIsIndividual" id="yes" className="text-primary" onClick={() => setAdverseIsBusiness(false)} />
                        <label htmlFor="yes" className="text-base font-semibold leading-none text-gray-800 mr-1">Individual</label>
                      </div>

                      <div className="flex flex-row items-center gap-1">
                        <input type="radio" name="adverseIsIndividual" id="no" className="text-primary" onClick={() => setAdverseIsBusiness(true)} />
                        <label htmlFor="no" className="text-base font-semibold leading-none text-gray-800">Business</label>
                      </div>

                    </div>

                    <div className="h-32 md:h-16">

                      { !adverseIsBusiness && (
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 h-24">
                          <div className="flex flex-col sm:w-1/2">
                            <label htmlFor="adverseFirstName" className="text-base leading-none text-gray-800">First Name</label>
                            <input type="text" name="adverseFirstName" id="adverseFirstName" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                          </div>

                          <div className="flex flex-col sm:w-1/2">
                            <label htmlFor="adverseLastName" className="text-base leading-none text-gray-800">Last Name</label>
                            <input type="text" name="adverseLastName" id="adverseLastName" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                          </div>
                        </div>
                      )
                      }

                      { adverseIsBusiness && (
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 h-24">
                          <div className="flex flex-col w-full">
                            <label htmlFor="adverseEntityName" className="text-base leading-none text-gray-800">Entity Name</label>
                            <input type="text" name="adverseEntityName" id="adverseEntityName" className="mt-2 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                          </div>
                        </div>
                      )
                      }

                    </div>


                  </fieldset>

                  {/* Adverse Address */}
                  <fieldset className="my-6">
                    <legend className="font-semibold">Address of Defendant or Adverse Party<span className="text-primary">*</span></legend>
                    
                    <div className="flex flex-col gap-4">

                      <div>
                        <label htmlFor="adverseAddressLine1" className="text-base leading-none text-gray-800">Address Line 1</label>
                        <input type="text" name="adverseAddressLine1" id="adverseAddressLine1" className="mt-2 w-full text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                      </div>

                      <div>
                        <label htmlFor="adverseAddressLine2" className="text-base leading-none text-gray-800">Address Line 2</label>
                        <input type="text" name="adverseAddressLine2" id="adverseAddressLine2" className="mt-2 w-full text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="adverseCity" className="text-base leading-none text-gray-800">City</label>
                          <input type="text" name="adverseCity" id="adverseCity" className="mt-2 text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                        </div>
                        
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="adverseState" className="text-base leading-none text-gray-800">State</label>
                          <select name="adverseState" id="adverseState" className="mt-2 h-12 text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required>
                            <option value=""></option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
                        </div>
                        
                        <div className="flex flex-col md:w-1/3">
                          <label htmlFor="adverseZipCode" className="text-base leading-none text-gray-800">Zip Code</label>
                          <input type="text" name="adverseZipCode" id="adverseZipCode" className="mt-2 text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                        </div>
                      </div>

                    </div>

                  </fieldset>

                  {/* Additional Matter Information */}

                  <div className="my-6">
                    <label htmlFor="priorDiscussionsOfCase" className="text-base font-semibold leading-none text-gray-800">Have you had any discussions with the defendant(s) about resolving the claim? If so, please describe them and attach any correspondence. <span className="text-primary">*</span></label>
                    <textarea type="priorDiscussionsOfCase" name="priorDiscussionsOfCase" id="priorDiscussionsOfCase" className="mt-2 h-36 w-full text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
                  </div>

                  <div className="my-6">
                    <label htmlFor="damages" className="text-base font-semibold leading-none text-gray-800">What are the damages (e.g., out-of-pocket losses, amount promised under a contract but not paid, etc.)? <span className="text-primary">*</span></label>
                    <textarea type="damages" name="damages" id="damages" className="mt-2 h-36 w-full text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
                  </div>

                  <div className="my-6">
                    <label htmlFor="priorAttorney" className="text-base font-semibold leading-none text-gray-800">Have you consulted or retained any other attorney(s) concerning this matter before coming to this office? If so, please identity who and when. <span className="text-primary">*</span></label>
                    <textarea type="priorAttorney" name="priorAttorney" id="priorAttorney" className="mt-2 h-36 w-full text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
                  </div>

                  <div className="my-6">
                    <label htmlFor="additionalInformation" className="text-base font-semibold leading-none text-gray-800">Is there any additional information that would help us evaluate your matter? Please describe: <span className="text-primary">*</span></label>
                    <textarea type="additionalInformation" name="additionalInformation" id="additionalInformation" className="mt-2 h-36 w-full text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
                  </div>

            </div>
            
            {/* How Heard About Firm */}
            <div className="my-8">
              <h2 className="semibold text-xl border-b-2 border-b-slate-900">How did you hear about Hollington Law Firm?</h2>

              <div className="flex flex-col gap-6">
                <fieldset className="mt-6">
                    <legend className="mb-2 font-semibold">Were you referred to this office by another individual?<span className="text-primary">*</span></legend>

                    <div className="flex flex-row gap-2">
                      
                      <div className="flex flex-row items-center gap-1">
                        <input type="radio" name="referral" id="yes" className="text-primary" onClick={() => setReferral(true)} required />
                        <label htmlFor="yes" className="text-base font-semibold leading-none text-gray-800 mr-1">Yes</label>
                      </div>

                      <div className="flex flex-row items-center gap-1">
                        <input type="radio" name="referral" id="no" className="text-primary" onClick={() => setReferral(false)} required/>
                        <label htmlFor="no" className="text-base font-semibold leading-none text-gray-800">No</label>
                      </div>

                    </div>

          
                    <div className={referral === true ? "flex flex-col gap-1 mt-6 opacity-100 transition ease-in-out delay-150 h-12" : "h-0 mt-6 flex flex-col gap-1 opacity-0 transition ease-in-out"}>
                      <label htmlFor="referralName" className="text-base leading-none text-gray-900">Referral Name</label>
                      <input type="text" name="referralName" id="referralName" className="w-96 text-base leading-none text-gray-900 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100"/>
                    </div>


                  </fieldset>

                  <fieldset>
                    <legend className="mb-2 font-semibold">Did you find our firm online? If so, please identity which online sources brought you to us. <span className="text-primary">*</span></legend>
                    
                    <div className="flex flex-row gap-2 items-center my-1">
                      <input type="checkbox" id="googleBusinessListing" name="googleBusinessListing" className="text-primary"/>
                      <label htmlFor="googleBusinessListing">Google Business Listing</label>
                    </div>

                    <div className="flex flex-row gap-2 items-center my-1">
                      <input type="checkbox" id="coloradoLicensedLawyer" name="coloradoLicensedLawyer" className="text-primary"/>
                      <label htmlFor="coloradoLicensedLawyer">Colorado Licensed Lawyer</label>
                    </div>

                    <div className="flex flex-row gap-2 items-center my-1">
                      <input type="checkbox" id="yelp" name="yelp" className="text-primary"/>
                      <label htmlFor="yelp">Yelp</label>
                    </div>

                    <div className="flex flex-row gap-2 items-center my-1">
                      <input type="checkbox" id="linkedin" name="linkedin" className="text-primary"/>
                      <label htmlFor="linkedin">Linkedin</label>
                    </div>

                    <div className="flex flex-row gap-2 items-center my-1">
                      <input type="checkbox" id="facebook" name="facebook" className="text-primary"/>
                      <label htmlFor="facebook">Facebook</label>
                    </div>

                    <div className="flex flex-row gap-2 items-center my-1">
                      <input type="checkbox" id="other" name="other" className="text-primary"/>
                      <label htmlFor="other" className="hidden">Other</label>
                      <input type="text" id="otherOnlineSource" name="otherOnlineSource" placeholder="Other" className="h-8 text-base leading-none text-gray-900 py-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-500"/>
                    </div>

                  </fieldset>
                </div>

              </div>
            
            {/* Submission */}
            <p className="text-sm leading-3 text-gray-600">By clicking submit you agree to our terms of service, <Link to="/privacy-policy" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">privacy policy</Link> and how we use data as stated</p>
            
            <button type="submit" name="submit" id="submit" className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-primary hover:bg-primary rounded hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none w-48">SUBMIT</button>

        </form> 
        {/* End Intake Form */}
      </div>   
    </Layout>
  )
}

export default ClientIntakeForm

export const Head = () => (
  <Seo 
    title="Client Intake Form"
    description="Thank you very much for giving Hollington Law Firm the opportunity to evaluate your legal matter. This form is part of a process that will allow us to determine whether our firm is the right fit for your matter and to run a conflict check"
  />
)