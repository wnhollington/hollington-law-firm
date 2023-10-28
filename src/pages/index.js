import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import About from "../components/sections/about"
import Accolades from "../components/sections/accolades"
import PracticeAreas from "../components/sections/practiceAreas"
import WhatSetsUsApart from "../components/sections/whatSetsUsApart"
import Process from "../components/sections/process"
import Testimonials from "../components/sections/testimonials"
import Schedule from "../components/sections/schedule"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Accolades />
      <About />
      <PracticeAreas />
      <Process />
      <WhatSetsUsApart />
      <Testimonials />
      <Schedule />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
