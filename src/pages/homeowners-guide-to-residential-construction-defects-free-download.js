import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const Ebook = () => {
    
    useEffect(() => {
        const script = document.createElement("script");
        script.id = "lm-embedded-script";
        script.async = true;
        script.innerHTML = `
            !function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5),lm_intake("b826fa58-4fc6-4e08-8170-fbde69cdf540");
        `;
        document.body.appendChild(script);
    }, []);

    return (
        <Layout>
            <div>
                
                <h1 className="max-w-4xl my-12 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-8 md:mx-auto text-center">Homeowners' Guide to Residential Construction Defects in Colorado - Free Download</h1>
                
                <div className="mx-8 my-12 flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
                
                    <div className="lg:w-1/2">
                        
                        <p className="text-2xl leading-8 text-gray-900 p-2">Are you a Colorado homeowner experiencing construction defects? If so, our Ebook will answer your top questions and guide you through the process of obtaining compensation to fix or repair your property. For more information and a free case evaluation, call Neal Hollington today at <span><a href={`tel:303-276-2647`} className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">(303) 276-2647</a></span> or <span><Link to="/schedule-consultation" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">Schedule Your Consultation Now</Link></span>.</p>
                        <div id="lm-embedded-script"></div>

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
export default Ebook

export const Head = () => (
  <Seo 
    title="Homeowners' Guide to Residential Construction Defects Free Download"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
)