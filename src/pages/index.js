import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
