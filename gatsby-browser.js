import "./src/styles/global.css";
import "@fontsource/libre-baskerville";
import "@fontsource/source-sans-pro";

/**
 * Load navi.min.js (tracking pixel) ONLY when:
 *   • the path starts with /schedule
 *   • OR matches the ebook download slug
 *   • OR matches /contact
 *   • OR the page contains a SidebarForm (data-lawmatics-form)
 */
export const onRouteUpdate = ({ location }) => {
  const slug = location.pathname;

  const needsLawmatics =
    slug.startsWith("/schedule") ||
    slug ===
      "/homeowners-guide-to-residential-construction-defects-free-download/" ||
    slug === "/contact" ||
    document.querySelector("[data-lawmatics-form]");

  if (!needsLawmatics || window.lm_navi) return;

  /* — self‑hosted pixel (7 kB gzipped, cached forever) — */
  const s = document.createElement("script");
  s.src = "/third-party/lawmatics/navi.min.js";
  s.async = true;
  s.onload = () => {
    window.lm_navi?.("init", process.env.GATSBY_LAWMATICS_ID || "");
    window.lm_navi?.("event", "pageload");
  };
  document.head.appendChild(s);
};