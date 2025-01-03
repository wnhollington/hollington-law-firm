import * as React from "react"
import { useEffect } from "react"

const SidebarForm = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.id = "lm-embedded-script";
        script.async = true;
        script.innerHTML = `
          !function(e,t,n,a,s,c,i){if(!e[s]){i=e[s]=function(){i.process?i.process.apply(i,arguments):i.queue.push(arguments)},i.queue=[],i.t=1*new Date;var o=t.createElement(n);o.async=1,o.src=a+"?t="+Math.ceil(new Date/c)*c;var r=t.getElementsByTagName(n)[0];r.parentNode.insertBefore(o,r)}}(window,document,"script","https://navi.lawmatics.com/intake.min.js","lm_intake",864e5),lm_intake("b781fd9e-8183-4be2-91c9-4019113650f9");
        `;
        document.body.appendChild(script);
      }, []);
    return (
        <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 shadow-xl rounded-md">
            <h3 className="text-center text-2xl mt-2 mb-6">Consultation Request</h3>
            <div id="lm-embedded-script"></div>
        </div>
    )
}

export default SidebarForm