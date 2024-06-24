import React from 'react';

// GTM
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents, setHtmlAttributes }) => {

  setHtmlAttributes({ lang: 'en-US' });

  setHeadComponents([
    <script 
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.GTM_ID}');`
      }}
    />,
    <script 
      dangerouslySetInnerHTML={{
        __html: `
          function isCalendlyEvent(e) {
            return e.data.event &&
            e.data.event.indexOf('calendly') === 0;
          };
          window.addEventListener('message',function(e) {
            if (isCalendlyEvent(e)) {
              //console.log(e.data);
              dataLayer.push(e.data);
            }
          }
        `
      }}
    />
  ]);
  setPreBodyComponents([
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  ])
};
  
    