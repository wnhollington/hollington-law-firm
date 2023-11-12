import './src/styles/global.css'
import "@fontsource/mr-dafoe"
import "@fontsource/libre-baskerville"
import "@fontsource/source-sans-pro"

import React from 'react';
import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};