import { useEffect } from "react";

const LAW_ID = process.env.GATSBY_LAWMATICS_ID || "";

const Analytics = () => {
  useEffect(() => {
    const loadLawmatics = () => {
      if (window.lm_navi || document.getElementById("lawmatics-navi-inline-script")) return;

      const script = document.createElement("script");
      script.id = "lawmatics-navi-inline-script";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        !function(e,t,n,a,i,s,c,o,l){e[i]||(c=e[i]=function(){
          c.process ? c.process.apply(c,arguments) : c.queue.push(arguments)
        },c.queue=[],c.t=1*new Date,o=t.createElement(n),o.async=1,
        o.src=a+'?t='+Math.ceil(new Date/s)*s,l=t.getElementsByTagName(n)[0],
        l.parentNode.insertBefore(o,l))}(window,document,'script',
        'https://navi.lawmatics.com/navi.min.js','lm_navi',864e5),
        lm_navi('init','${LAW_ID}'),
        lm_navi('event','pageload');
      `;
      document.head.appendChild(script);
    };

    if (document.readyState === "complete") {
      loadLawmatics();
    } else {
      window.addEventListener("load", loadLawmatics);
      return () => window.removeEventListener("load", loadLawmatics);
    }
  }, []);

  return null;
};

export default Analytics;