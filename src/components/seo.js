import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const defaultDescription = site.siteMetadata?.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta property="og:title" content={defaultTitle ? `${title} | ${defaultTitle}` : title} />
      <meta name="description" content={description ? description : defaultDescription} />
      <meta property="og:description" content={description ? description : defaultDescription} />
      <meta property="og:type" content="website" />
      {children}
    </>
  )
}

export default Seo