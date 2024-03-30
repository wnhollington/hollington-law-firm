import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Search from "../components/search"
const searchIndices = [{ name: `Articles`, title: `Articles` }]

const Articles = () => (
  <Layout>
    <div className="max-w-6xl my-4 py-4 mx-8 xl:mx-auto md:min-h-screen">
      <h1 className="mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">Articles</h1>
      <p className="text-xl font-medium text-gray-900">Welcome to our law firm's Articles page, where we aim to provide valuable insights and resources to address your legal inquiries. We understand that navigating the complexities of the legal system can be daunting, which is why we've curated a collection of informative articles covering various practice areas. Whether you're seeking clarification on a specific legal concept or exploring your options for a particular issue, our articles serve as a helpful starting point. Feel free to utilize our search function to input specific queries and access tailored resources that align with your concerns.</p>
      <Search indices={searchIndices} />
    </div>
  </Layout>
)

export default Articles

export const Head = () => (
  <Seo 
    title="Articles"
    description="We understand that navigating the complexities of the legal system can be daunting, which is why we've curated a collection of informative articles covering various practice areas."
  />
)