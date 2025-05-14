import React from "react";

export const onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: "en-US" });

  const GTM_ID = process.env.GTM_ID || "";

  setHeadComponents([
    <link
      key="gtm-preconnect"
      rel="preconnect"
      href="https://www.googletagmanager.com"
      crossOrigin="anonymous"
    />,
  ]);

  setPreBodyComponents([
    <noscript key="gtm-noscript">
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>,
  ]);
};