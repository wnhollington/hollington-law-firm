import * as React from "react";
import { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

const LAW_ID = "b826fa58-4fc6-4e08-8170-fbde69cdf540";
const SCRIPT_ID = "lm-lawmatics-ebook-loader";
const PLACEHOLDER_ID = "lm-embedded-script";

const Ebook = () => {
  useEffect(() => {
    // Reset form placeholder div
    const existing = document.getElementById(PLACEHOLDER_ID);
    if (existing) existing.remove();

    const newDiv = document.createElement("div");
    newDiv.id = PLACEHOLDER_ID;

    const container = document.getElementById("ebook-form-container");
    if (container) container.appendChild(newDiv);

    // Inject Lawmatics script if needed
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.innerHTML = `
        !function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){
        i.process?i.process.apply(i,arguments):i.queue.push(arguments)},
        i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,
        o.src=a+"?t="+Math.ceil(new Date/c)*c;
        var r=t.getElementsByTagName(n)[0]; r.parentNode.insertBefore(o,r)
        }}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5);
        lm_intake("${LAW_ID}");
      `.trim();
      document.body.appendChild(script);
    } else {
      if (window.lm_intake) {
        window.lm_intake(LAW_ID);
      }
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl px-4">
          <h1 className="max-w-4xl mt-24 mb-12 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
            Homeowners' Guide to Residential Construction Defects in Colorado - Free Download
          </h1>

          <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-20">
            {/* Text + Form */}
            <div className="lg:w-1/2">
              <p className="text-2xl leading-8 text-gray-900 p-2">
                Are you a Colorado homeowner experiencing construction defects? If so, our Ebook will answer your top questions and guide you through the process of obtaining compensation to fix or repair your property. For more information and a free case evaluation, call Neal Hollington today at{" "}
                <a href="tel:303-276-2647" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">
                  (303) 276-2647
                </a>{" "}
                or{" "}
                <Link to="/schedule-consultation" className="text-primary underline decoration-dotted hover:text-primary hover:decoration-solid">
                  Schedule Your Consultation Now
                </Link>.
              </p>

              <div id="ebook-form-container" className="w-full flex justify-center mt-8 px-4">
                <div id="lm-embedded-script" className="w-full max-w-xl" />
              </div>
            </div>

            {/* Ebook Image */}
            <div className="lg:w-1/2 flex items-start">
              <StaticImage
                src="https://res.cloudinary.com/wnhollington/image/upload/v1712153431/Cover_e1wltz.png"
                height={650}
                className="shadow-2xl"
                alt="Ebook cover: Homeowners' Guide to Residential Construction Defects"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ebook;

export const Head = () => (
  <Seo
    title="Homeowners' Guide to Residential Construction Defects Free Download"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
);