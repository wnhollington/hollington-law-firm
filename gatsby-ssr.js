import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// Party Town, G-Tag
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents, setHtmlAttributes }) => {

  setHtmlAttributes({ lang: 'en-US' });

  setHeadComponents([
    <Partytown key="partytown" debug={true} forward={['dataLayer.push']} />,
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
  ]);
  setPreBodyComponents([
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  ])
};
  
    