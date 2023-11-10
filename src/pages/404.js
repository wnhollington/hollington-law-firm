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
        <h1 className="max-w-lg mb-4 text-3xl leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">404: Page Not Found</h1>
        <div className="flex gap-6 my-12">
          <StaticImage src="https://res.cloudinary.com/wnhollington/image/upload/v1699606613/ndus696tmp3mcxbvnnjw.png" width={1250}/>
          <div>
            <p className="text-xl text-gray-900 my-4 text-justify">
              Oops! I apologize, but it appears that the page you are looking for cannot be found. Please head back to the home page and try again.
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
