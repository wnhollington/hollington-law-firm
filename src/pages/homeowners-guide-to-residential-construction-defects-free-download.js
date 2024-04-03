import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import addToMailchimp from "gatsby-plugin-mailchimp"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

export default class EbookSignup extends React.Component {
    
    constructor() {
        super()
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            message: "You will not be spammed and your information will never be sold.",
            result: null
        }
    }

    // Handle Email
    handleEmail = event => {
        this.setState({ email: event.target.value })
    }

    // Handle First Name
    handleFirstName = event => {
        this.setState({ firstName: event.target.value })
    }

    // Handle Email
    handleLastName = event => {
        this.setState({ lastName: event.target.value })
    }

    // Handle Submit
    _handleSubmit = async (e) => {
        e.preventDefault()
        
        const result = await addToMailchimp(this.state.email, {
            FNAME: this.state.firstName,
            LNAME: this.state.lastName,
        })
        
        this.setState({result: result.result})
        
        console.log(result)
        
        if (this.state.result === "success"){
            this.setState({ message: "Thank you!  Please check your email to confirm your email for your free download.  Please note that this confirmation email may wind up in your 'spam' folder."})
            document.getElementById(`signup-form`).reset()
        }
        
        else if (this.state.result === "error") {
            this.setState({ message: result.msg})
        }
    }
    
    render () {

        return (
            <Layout>
                <div>
                    
                    <h1 className="max-w-4xl my-12 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-8 md:mx-auto text-center">Homeowners' Guide to Residential Construction Defects in Colorado - Free Download</h1>
                    
                    <div className="mx-8 my-12 flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
                    
                        <div className="lg:w-1/2">
                            
                            <p className="text-2xl leading-8 text-gray-900 p-2">Are you a Colorado homeowner experiencing construction defects? If so, our Ebook will answer your top questions and guide you through the process of obtaining compensation to fix or repair your property. For more information and a free case evaluation, call Neal Hollington today at <span><a href={`tel:303-276-2647`} className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">303-2762647</a></span> or <span><Link to="/schedule-consultation" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">Schedule Your Consultation Now</Link></span>.</p>
                            
                            <form className="my-4 p-2" onSubmit={(this._handleSubmit)} id="signup-form">
                                <div className="flex flex-wrap items-center">
    
                                    <div className="w-full flex flex-col gap-4">
    
                                        <div className="flex flex-col md:flex-row gap-4">
                                            
                                            <div className="flex flex-col w-full md:w-1/2">
                                                <label htmlFor="firstName" className="text-base font-semibold leading-none text-gray-800">First Name</label>
                                                <input onChange={this.handleFirstName} type="text" name="firstName" id="firstName" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                                            </div>
    
                                            <div className="flex flex-col w-full md:w-1/2">
                                                <label htmlFor="lastName" className="text-base font-semibold leading-none text-gray-800">Last Name</label>
                                                <input onChange={this.handleLastName} type="text" name="lastName" id="lastName" className="text-base leading-none text-gray-900 p-3 focus:outline-none mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
                                            </div>
    
                                        </div>
    
                                        <label htmlFor="email" className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                        <input onChange={this.handleEmail} type="email" name="email" id="email" className="text-base leading-none text-gray-900 p-3 focus:outline-none bg-gray-100 border rounded border-gray-200 placeholder-gray-100" required/>
    
                                    </div>
                                    <p class="mt-3 text-sm text-gray-900">{this.state.message}</p>
                                    <div className="flex items-center justify-center w-full">
                                        <button type="submit" name="submit" id="submit" className="mt-9 text-2xl font-semibold leading-none text-white py-4 px-10 bg-gradient-to-b from-primary to-red-800 rounded hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none w-full">GET MY FREE EBOOK</button>
                                    </div>
                                </div>

                            </form>
    
                        </div>
    
                        <div className="md:w-1/2 mx-auto text-center">
                            <StaticImage 
                                src="https://res.cloudinary.com/wnhollington/image/upload/v1712153431/Cover_e1wltz.png"
                                height={650}
                                className="shadow-2xl"
                            />
                        </div>
    
                    </div>
    
                </div>   
            </Layout>
        )
    }
}

export const Head = () => (
  <Seo 
    title="Homeowners' Guide to Residential Construction Defects Free Download"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
)