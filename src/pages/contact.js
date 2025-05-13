import * as React from "react";
import { useEffect } from "react";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

const LAW_ID = "1e53ea02-d778-4cd6-882c-d96152846adf";
const SCRIPT_ID = "lm-lawmatics-contact-loader";
const PLACEHOLDER_ID = "lm-embedded-script";
const CONTAINER_ID = "contact-form-container";

const Contact = () => {
  useEffect(() => {
    const loadLawmatics = () => {
      // Remove existing embed if it exists
      const existing = document.getElementById(PLACEHOLDER_ID);
      if (existing) existing.remove();

      const newDiv = document.createElement("div");
      newDiv.id = PLACEHOLDER_ID;

      const container = document.getElementById(CONTAINER_ID);
      if (container) container.appendChild(newDiv);

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
    };

    // Use IntersectionObserver + requestIdleCallback
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(loadLawmatics);
        } else {
          setTimeout(loadLawmatics, 200);
        }
        observer.disconnect();
      }
    });

    const target = document.getElementById(CONTAINER_ID);
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="w-full flex flex-col items-center my-4 py-4 2xl:h-screen overflow-hidden" id="contact-page">
        <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
          Get in Touch
        </h1>
        <p className="text-xl font-medium text-gray-900 max-w-xl mx-8 text-center">
          Thank you for your interest in contacting our firm. Please fill out the below form and a representative will be in touch shortly.
        </p>
        <div id="contact-form-container" className="w-full flex justify-center mt-8 px-4">
          <div id="lm-embedded-script" className="w-full max-w-xl min-h-[600px]" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const Head = () => (
  <Seo
    title="Contact"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
);