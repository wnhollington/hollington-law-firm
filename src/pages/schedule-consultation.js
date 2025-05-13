import * as React from "react";
import { useEffect } from "react";

// Components
import Layout from "../components/layout";
import Seo from "../components/seo";

const LAW_ID = "862e0bf9-7192-434f-a858-5bb13faf312d";
const SCRIPT_ID = "lm-lawmatics-schedule-loader";
const PLACEHOLDER_ID = "lm-embedded-script";
const CONTAINER_ID = "scheduling-form-container";

const ScheduleConsultation = () => {
  useEffect(() => {
    const loadLawmatics = () => {
      // Clear any existing form instance
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

    // Lazy-load form when visible and idle
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
      <div className="my-4 py-4 min-h-screen" id="scheduling-page">
        <h1 className="mb-12 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">
          Schedule Consultation
        </h1>
        <div id="scheduling-form-container">
          <div id="lm-embedded-script" className="w-full max-w-xl mx-auto min-h-[600px]" />
        </div>
      </div>
    </Layout>
  );
};

export default ScheduleConsultation;

export const Head = () => (
  <Seo
    title="Schedule Consultation"
    description="Thank you for your interest in contacting Hollington Law Firm. Please fill out the below form and a representative will be in touch shortly."
  />
);