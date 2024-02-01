import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// Components
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="my-2 py-4 max-w-3xl mx-auto">
        <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl mx-auto text-center">404: Page Not Found</h1>
        <div className="flex flex-col md:flex-row gap-6 my-12 justify-center items-center">
          <StaticImage src="https://images.ctfassets.net/irf9uehwbpr8/TaEPXl8fE2m1Gb4BVA9Ic/ebaf0e4e448decbeed3d9bd475b69898/ndus696tmp3mcxbvnnjw.png" className="max-w-sm"/>
          <div className="m-4">
            <p className="text-xl text-gray-900 mb-12 text-justify max-w-lg">
              Oops! I apologize, but it appears that the page you are looking for cannot be found and may be lost in internet space. Please head back to the home page and try again.
            </p>
            <Link to="/" className="bg-primary p-3 rounded-lg text-md font-semibold leading-6 text-gray-100 hover:text-gray-200 hover:shadow-lg transition-colors duration-300">Take Me Home</Link>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo 
    title="404: Page Not Found"
  />
)
