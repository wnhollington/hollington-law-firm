import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import PracticeAreas from "../components/sections/practice-areas"
import WhatSetsUsApart from "../components/sections/what-sets-us-apart"
import Process from "../components/sections/process"
import Testimonials from "../components/sections/testimonials"
import Schedule from "../components/sections/schedule"
import Faqs from "../components/sections/faqs"
import { useSiteMetadata } from "../utilities/use-site-metadata"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <PracticeAreas />
      <WhatSetsUsApart />
      <Process />
      <Faqs/>
      <Testimonials />
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
      description="Hollington Law Firm is a Colorado civil litigation firm. From housing & construction defects, to personal injury and consumer fraud, the firm has the knowledge, passion, and resources to fight on your behalf."
    />
  )
}
