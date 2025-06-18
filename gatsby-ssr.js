import React from "react";

export const onRenderBody = ({
  setPreBodyComponents,
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: "en-US" });

  const GTM_ID = process.env.GTM_ID || "";
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction || !GTM_ID) return;

  setHeadComponents([
    <link
      key="gtm-preconnect"
      rel="preconnect"
      href="https://www.googletagmanager.com"
      crossOrigin="anonymous"
    />,
    <script
      key="gtm-inline-script"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
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