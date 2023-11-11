import './src/styles/global.css'
import "@fontsource/mr-dafoe"
import "@fontsource/libre-baskerville"
import "@fontsource/source-sans-pro"

import React from 'react';
import RootElement from './src/components/root-element';

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }
  
  const pagePath = location ? location.pathname + location.search + location.hash : undefined;
  
  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);

  return true;
};
  
export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};