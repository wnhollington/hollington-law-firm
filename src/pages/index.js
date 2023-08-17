import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import Accolades from "../components/sections/accolades"
import Testimonials from "../components/sections/testimonials"
import Schedule from "../components/sections/schedule"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Accolades />
      <Testimonials />
      <Schedule />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
