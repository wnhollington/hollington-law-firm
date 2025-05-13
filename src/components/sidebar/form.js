import * as React from "react"
import { useEffect } from "react";

const LAW_ID = "b781fd9e-8183-4be2-91c9-4019113650f9";

export default function SidebarForm() {
  useEffect(() => {
    /* 1 ─ add the bootstrap <script> tag */
    const stub = document.createElement("script");
    stub.id = "lm-embedded-script";
    stub.async = true;
    stub.innerHTML = `
      !function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){
      i.process?i.process.apply(i,arguments):i.queue.push(arguments)},
      i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,
      o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];
      r.parentNode.insertBefore(o,r)}}
      (window,document,"script","https://navi.lawmatics.com/intake.min.js",
      "lm_intake",864e5),
      lm_intake("${LAW_ID}");
    `;
    document.body.appendChild(stub);   // must be in the document before widget loads
  }, []);

  return (
    <div
      className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 shadow-xl rounded-md"
      data-lawmatics-form                 /* tells gatsby-browser to load the pixel */
    >
      <h3 className="text-center text-2xl mt-2 mb-6">Consultation Request</h3>

      {/* ↓ placeholder element Lawmatics replaces with the form */}
      <div id="lm-embedded-script"></div>
    </div>
  );
}