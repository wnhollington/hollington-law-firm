import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// GTM
export const onRenderBody = ({ setHeadComponents, setPreBodyComponents, setHtmlAttributes }) => {

  setHtmlAttributes({ lang: 'en-US' });

  setHeadComponents([
    <script type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}></script>,
    <script 
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GTM_ID}');`
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
  
    