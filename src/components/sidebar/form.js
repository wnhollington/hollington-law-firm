import * as React from "react"
import { Link } from "gatsby"

const SidebarForm = () => (

    <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 shadow-xl rounded-md">
        <h3 className="text-center text-2xl mt-2 mb-6">Consultation Request</h3>
        <form 
            name="sidebar-form" 
            method="POST" 
            data-netlify="true"
            action="/thank-you" 
            className="flex flex-col gap-4"
        >
            
            <input type="hidden" name="form-name" value="sidebar-form"/>
            

            <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="text-base font-semibold leading-none text-gray-800">Name *</label>
                <input type="text" name="name" id="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none bg-white border rounded border-gray-200 placeholder-gray-100" required/>
            </div>

            <div className="w-full flex flex-col gap-2">
                <label htmlFor="telephone" className="text-base font-semibold leading-none text-gray-800">Telephone *</label>
                <input type="tel" name="telephone" id="telephone" className="text-base leading-none text-gray-900 p-3 focus:outline-none bg-white border rounded border-gray-200 placeholder-gray-100" required/>
            </div>
            
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="email" className="text-base font-semibold leading-none text-gray-800">Email Address *</label>
                <input type="email" name="email" id="email" className="text-base leading-none text-gray-900 p-3 focus:outline-none bg-white border rounded border-gray-200 placeholder-gray-100" required/>
            </div>
            
            <div className="w-full flex flex-col gap-2">
                <label htmlFor="message" className="text-base font-semibold leading-none text-gray-800">Brief Description of Issue *</label>
                <textarea type="text" name="message" id="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none bg-white border rounded border-gray-200 placeholder-gray-100 resize-none" required></textarea>
            </div>
            
            <p className="text-sm leading-4 text-gray-600 mt-4">By clicking submit you agree to our terms of service, <Link to="/privacy-policy" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">privacy policy</Link> and how we use data as stated</p>
            
            <div className="flex items-center justify-center w-full">
                <button type="submit" name="submit" id="submit" className="text-base font-semibold leading-none text-white py-4 px-10 bg-gradient-to-br from-primary to-red-800 hover:bg-primary rounded hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none w-full">SUBMIT</button>
            </div>
        
        </form> 
    </div>

)

export default SidebarForm