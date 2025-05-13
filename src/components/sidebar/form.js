import * as React from "react";
import { useEffect } from "react";

const LAW_ID = "b781fd9e-8183-4be2-91c9-4019113650f9";
const SCRIPT_ID = "lm-lawmatics-sidebar-loader";

export default function SidebarForm() {
  useEffect(() => {
    const containerId = "sidebar-form-container";
    const placeholderId = "lm-embedded-sidebar";

    const loadLawmatics = () => {
      // Remove any existing embed
      const existing = document.getElementById(placeholderId);
      if (existing) existing.remove();

      // Create new placeholder
      const newDiv = document.createElement("div");
      newDiv.id = placeholderId;

      const container = document.getElementById(containerId);
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

    // Lazy load only when form scrolls into view
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

    const target = document.getElementById(containerId);
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="sidebar-form-container"
      className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 shadow-xl rounded-md"
    >
      <h3 className="text-center text-2xl mt-2 mb-6">Consultation Request</h3>
      <div id="lm-embedded-script" />
    </div>
  );
}