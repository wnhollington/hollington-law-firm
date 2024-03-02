import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// Party Town, G-Tag
const ORIGIN = 'https://www.googletagmanager.com';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents, setHtmlAttributes }) => {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null;

  setHtmlAttributes({ lang: 'en-US' });
  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
    // GTM
    <script
      key="google-tag-manager"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');`
      }}
    />,
    // Google Analytics
    <script key="google-analytics" type="text/partytown" src={`${ORIGIN}/gtag/js?id=${process.env.GA_TRACKING_ID}`} />,
    <script
      key="google-analytics-config"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag(){ window.dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', '${process.env.GA_TRACKING_ID}', { send_page_view: false })`
      }}
    />
  ]);
  setPreBodyComponents([
    <noscript
      key="google-tag-manager"
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `,
      }}
    />
  ])
};
  
    