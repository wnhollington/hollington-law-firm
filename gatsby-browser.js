import "./src/styles/global.css";

// Libre Baskerville
import "@fontsource/libre-baskerville/400.css";
import "@fontsource/libre-baskerville/400-italic.css";

// Source Sans Pro
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/400-italic.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/source-sans-pro/700-italic.css";

/**
 * Loads the Lawmatics tracking pixel on every route.
 * Pixel is self-hosted and idle-loaded for performance.
 */
export const onRouteUpdate = () => {
  if (window.lm_navi) return;

  const s = document.createElement("script");
  s.src   = "https://navi.lawmatics.com/navi.min.js";
  s.async = true;
  s.onload = () => {
    window.lm_navi?.("init", process.env.GATSBY_LAWMATICS_ID || "");
    window.lm_navi?.("event", "pageload");
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => document.head.appendChild(s), { timeout: 3000 });
  } else {
    setTimeout(() => document.head.appendChild(s), 3000);
  }
};