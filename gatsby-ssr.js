// gatsby-ssr.js
import React from 'react';

export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setHtmlAttributes,
}) => {
  /* ✱ 1.  Language attribute for <html> */
  setHtmlAttributes({ lang: 'en-US' });

  /* Gather env vars once (avoids undefined in preview) */
  const GTM_ID = process.env.GTM_ID || '';
  const LAWMATICS_ID = process.env.LAWMATICS_ID || '';

  /* ✱ 2.  Preconnect hints: lets DNS + TLS handshake run in parallel */
  const preconnect = (
    <>
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://navi.lawmatics.com" crossOrigin="anonymous" />
    </>
  );

  /* ✱ 3.  Inline GTM bootstrap (kept in <head> for dataLayer timing) */
  const gtmInline = (
    <script
      key="gtm-inline"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );

  /* ✱ 4.  Lawmatics NAVI bootstrap */
  const lawmaticsInline = (
    <script
      key="lawmatics-inline"
      dangerouslySetInnerHTML={{
        __html: `!function(e,t,n,a,i,s,c,o,l){e[i]||(c=e[i]=function(){
          c.process?c.process.apply(c,arguments):c.queue.push(arguments)},
          c.queue=[],c.t=1*new Date,o=t.createElement(n),o.async=1,
          o.src=a+'?t='+Math.ceil(new Date/s)*s,l=t.getElementsByTagName(n)[0],
          l.parentNode.insertBefore(o,l))}(window,document,'script',
          'https://navi.lawmatics.com/navi.min.js','lm_navi',864e5),
          lm_navi('init','${LAWMATICS_ID}'),lm_navi('event','pageload');`,
      }}
    />
  );

  setHeadComponents([preconnect, gtmInline, lawmaticsInline]);

  /* ✱ 5.  <noscript> fallback for GTM (as recommended by Google) */
  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="gtm"
      />
    </noscript>,
  ]);
};