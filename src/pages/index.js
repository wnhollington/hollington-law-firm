import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Accolades from "../components/sections/accolades"
import PracticeAreas from "../components/sections/practice-areas"
import WhatSetsUsApart from "../components/sections/what-sets-us-apart"
import Process from "../components/sections/process"
import Results from "../components/sections/results"
import Testimonials from "../components/sections/testimonials"
import Schedule from "../components/sections/schedule"
import Faqs from "../components/sections/faqs"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Accolades />
      <About />
      <PracticeAreas />
      <WhatSetsUsApart />
      <Process />
      <Faqs/>
      <Results />
      <Testimonials />
      <Schedule />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Denver Trial Lawyer" />
