
import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query metadata {
                site {
                    siteMetadata {
                        title
                        tagline
                        siteUrl
                        description
                        contact {
                            phone
                            email
                            address {
                                street
                                city
                            }
                        }
                        social {
                            facebook
                            youtube
                            instagram
                        }
                    }
                }
            }
        `
    ) 
    return site.siteMetadata
}