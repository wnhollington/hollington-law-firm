// src/components/seo.js
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
    "areaServed": [
      { "@type": "City", "name": "Denver" },
      { "@type": "City", "name": "Colorado Springs" },
      { "@type": "City", "name": "Boulder" },
      { "@type": "City", "name": "Fort Collins" },
      { "@type": "City", "name": "Aurora" },
      { "@type": "City", "name": "Centennial" },
      { "@type": "City", "name": "Littleton" },
      { "@type": "City", "name": "Parker" },
      { "@type": "City", "name": "Highlands Ranch" },
      { "@type": "City", "name": "Longmont" },
      { "@type": "City", "name": "Pueblo" }
    ],
    "serviceType": [
      "Construction Defect Litigation",
      "Mechanic’s Liens",
      "Property Damage",
      "Toxic Tort and Environmental Damage"
    ],
    "sameAs": [
      site.siteMetadata?.social.facebook,
      site.siteMetadata?.social.linkedin,
      site.siteMetadata?.social.twitter
    ]
  }

  const fullTitle = defaultTitle && title
    ? `${title} | ${defaultTitle}`
    : (title || defaultTitle)

  const metaDescription = description || defaultDescription

  return (
    <>
      <title>{fullTitle}</title>
      <meta property="og:title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      {/* Global LegalService JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      {/* Page-specific extras (e.g., BlogPosting schema) */}
      {children}
    </>
  )
}

export default Seo
