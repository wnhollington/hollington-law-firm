import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import Accolades from "../components/sections/accolades"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Accolades />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
