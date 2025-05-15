import * as React from "react";
import { useEffect } from "react";

const LAW_ID = "b781fd9e-8183-4be2-91c9-4019113650f9";
const SCRIPT_ID = "lm-lawmatics-sidebar-loader";

export default function SidebarForm() {
  useEffect(() => {
    const containerId = "sidebar-form-container";
    const placeholderId = "lm-embedded-sidebar";

    const loadLawmatics = () => {
      const existing = document.getElementById(placeholderId);
      if (existing) existing.remove();

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

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(loadLawmatics);
        } else {
          setTimeout(loadLawmatics, 200);
        }
        intersectionObserver.disconnect();
      }
    });

    const target = document.getElementById(containerId);
    if (target) intersectionObserver.observe(target);

    // Watch for Lawmatics injecting the iframe and override styles
    const resizeObserver = new MutationObserver(() => {
      const iframe = document.querySelector('iframe[src*="lawmatics"]');
      if (iframe) {
        iframe.removeAttribute("style");
        iframe.style.height = "650px";
        iframe.style.maxHeight = "100%";
        iframe.style.overflow = "auto";
        iframe.style.width = "100%";
        iframe.style.minWidth = "100%";
        iframe.style.display = "block";

        const wrapper = iframe.parentElement;
        if (wrapper) {
          wrapper.removeAttribute("style");
          wrapper.style.height = "auto";
          wrapper.style.maxHeight = "100%";
          wrapper.style.overflow = "visible";
          wrapper.style.width = "100%";
          wrapper.style.maxWidth = "100%";
        }

        const grandparent = wrapper?.parentElement;
        if (grandparent) {
          grandparent.removeAttribute("style");
          grandparent.style.height = "auto";
          grandparent.style.maxHeight = "100%";
          grandparent.style.overflow = "visible";
          grandparent.style.width = "100%";
        }
      }
    });

    if (target) {
      resizeObserver.observe(target, { childList: true, subtree: true });
    }

    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      id="sidebar-form-container"
      className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 shadow-xl rounded-md"
    >
      <h3 className="text-center text-2xl mt-2 mb-6">Consultation Request</h3>

      <div
        className="relative w-full overflow-auto"
        style={{
          maxHeight: "650px",
          height: "650px",
          scrollbarGutter: "stable",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          id="lm-embedded-script"
          style={{
            height: "100%",
            maxHeight: "100%",
            overflow: "auto",
          }}
        />
      </div>
    </div>
  );
}