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
        __html: `!function(e,t,n,a,i,s,c,o,l){e[i]||(c=e[i]=function(){c.process?c.process.apply(c,arguments):c.queue.push(arguments)},c.queue=[],c.t=1*new Date,o=t.createElement(n),o.async=1,o.src=a+'?t='+Math.ceil(new Date/s)*s,l=t.getElementsByTagName(n)[0],l.parentNode.insertBefore(o,l))}(window,document,'script','https://navi.lawmatics.com/navi.min.js','lm_navi',864e5),lm_navi('init','${process.env.LAWMATICS_ID}'),lm_navi('event','pageload')`
      }}
    />,
    <link
    key="preload-hero"
    rel="preload"
    as="image"
    href="https://res.cloudinary.com/wnhollington/image/upload/f_auto/q_auto/e_improve,e_sharpen/v1710770792/7.19.23-Construction-Defect_zzkg4q.compress_aforwx.webp"
    type="image/webp"
  />,
  ]);
  setPreBodyComponents([
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  ])
};
  
    