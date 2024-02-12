import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// Party Town, G-Tag
const ORIGIN = 'https://www.googletagmanager.com';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null;

  setHtmlAttributes({ lang: 'en-US' });
  setHeadComponents([
    <Partytown key="partytown" forward={['gtag']} />,
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
};
  
    