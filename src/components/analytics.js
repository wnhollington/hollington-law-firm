import { useEffect } from "react";

const GTM_ID = process.env.GATSBY_GTM_ID || "";
const LAW_ID = process.env.GATSBY_LAWMATICS_ID || "";

const Analytics = () => {
  useEffect(() => {
    // --- Load GTM asynchronously (working fine, keep as is) ---
    const loadGTM = () => {
      if (!GTM_ID || document.getElementById("gtm-script")) return;

      const script = document.createElement("script");
      script.id = "gtm-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    // --- Load Lawmatics script INLINE as originally provided ---
    const loadLawmaticsInline = () => {
      if (window.lm_navi) return;

      const inlineScript = document.createElement("script");
      inlineScript.id = "lawmatics-navi-inline-script";
      inlineScript.type = "text/javascript";
      inlineScript.async = true;
      inlineScript.innerHTML = `
        !function(e,t,n,a,i,s,c,o,l){e[i]||(c=e[i]=function(){c.process?c.process.apply(c,arguments):c.queue.push(arguments)},c.queue=[],c.t=1*new Date,o=t.createElement(n),o.async=1,o.src=a+'?t='+Math.ceil(new Date/s)*s,l=t.getElementsByTagName(n)[0],l.parentNode.insertBefore(o,l))}(window,document,'script','https://navi.lawmatics.com/navi.min.js','lm_navi',864e5),lm_navi('init','${LAW_ID}'),lm_navi('event','pageload');
      `;

      document.head.appendChild(inlineScript);
    };

    if (document.readyState === "complete") {
      loadGTM();
      loadLawmaticsInline();
    } else {
      window.addEventListener("load", () => {
        loadGTM();
        loadLawmaticsInline();
      });
      return () => window.removeEventListener("load", loadGTM);
    }
  }, []);

  return null;
};

export default Analytics;