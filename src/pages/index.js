import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import Accolades from "../components/sections/accolades"
import About from "../components/sections/about"
import TypesOfClaims from "../components/sections/types-of-claims"
import WhatSetsUsApart from "../components/sections/what-sets-us-apart"
import Process from "../components/sections/process"
import Results from "../components/sections/results"
import Testimonials from "../components/sections/testimonials"
import Schedule from "../components/sections/schedule"
import Faqs from "../components/sections/faqs"
import { useSiteMetadata } from "../utilities/use-site-metadata"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Accolades />
      <Results />
      <About />
      <TypesOfClaims/>
      <WhatSetsUsApart />
      <Process />
      <Testimonials />
      <Faqs/>
      <Schedule />
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  const siteMetaData = useSiteMetadata()
  return (
    <Seo 
      title={siteMetaData.description} 
      description="Free consultation with an experienced Colorado construction defect attorney. Learn your CDARA rights, deadlines, and next steps today."
    />
  )
}
