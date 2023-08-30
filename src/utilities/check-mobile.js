import { window } from "browser-monads"

export const checkMobile = () => {
  window.addEventListener("load", () => {
    // (A) CHECK FOR MOBILE
    var mobile = navigator.userAgent.toLowerCase().match(/mobile/i);
   
    // (B) DO SOMETHING...
    return mobile
  });
};