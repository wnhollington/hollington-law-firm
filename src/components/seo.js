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
            siteUrl
            contact {
              phone
              address {
                street
                city
              }
            }
            social {
              facebook
              linkedin
              twitter
            }
          }
        }
      }
    `
  )

  const defaultDescription = site.siteMetadata?.description
  const defaultTitle = site.siteMetadata?.title

  // Construct schema.org JSON-LD object
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": site.siteMetadata?.title,
    "url": site.siteMetadata?.siteUrl,
    "description": defaultDescription,
    "telephone": site.siteMetadata?.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": site.siteMetadata?.contact.address.street,
      "addressLocality": site.siteMetadata?.contact.address.city,
      "addressRegion": "CO",
      "postalCode": "80134",
      "addressCountry": "US"
    },
    "sameAs": [
      site.siteMetadata?.social.facebook,
      site.siteMetadata?.social.linkedin,
      site.siteMetadata?.social.twitter
    ]
  }

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta property="og:title" content={defaultTitle ? `${title} | ${defaultTitle}` : title} />
      <meta name="description" content={description ? description : defaultDescription} />
      <meta property="og:description" content={description ? description : defaultDescription} />
      <meta property="og:type" content="website" />

      {/* Inject JSON-LD schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {children}
    </>
  )
}

export default Seo