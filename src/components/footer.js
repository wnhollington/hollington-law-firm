import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebook, FaLinkedin} from "react-icons/fa6";

const Footer = () => {
    const siteMetaData = useSiteMetadata()

    const data = useStaticQuery(graphql`
        query queryClaimsAndProjects {
            allContentfulTypesOfProjects(
                sort: {title: ASC}
                ){
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
            allContentfulTypesOfClaims(
                sort: {title: ASC}
                ){
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `)
    return (
        <footer className="w-full py-8 bg-gradient-to-b from-primary to-red-950">
            
            <div className="flex flex-col items-center justify-center gap-8 px-4">
                
                {/* Footer Menu */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl mb-2">Quick Links</h3>
                            <nav>
                                <ul className="text-lg">
                                    <li><Link to="/about-the-firm">About the Firm</Link></li>
                                    <li><Link to="/w-neal-hollington">W. Neal Hollington</Link></li>
                                    <li><Link to="/articles">Articles</Link></li>
                                    <li><Link to="/schedule-consultation">Schedule Consultation</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><a href="http://maps.google.com/?q=11479 S Pine Dr, Parker, CO 80134"  target="__blank">Directions</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Types of Projects */}
                        <div>
                            <h3 className="text-xl mb-2">Types of Projects</h3>
                            <nav>
                                <ul className="text-lg">
                                    {data.allContentfulTypesOfProjects.edges.map((edge, key) => {
                                        return (
                                            <li key={key}><Link to={`/types-of-projects/${edge.node.slug}`}className="">{edge.node.title}</Link></li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>

                        {/* Types of Claims */}
                        <div>
                            <h3 className="text-xl mb-2">Types of Claims</h3>
                            <nav>
                                <ul className="text-lg">
                                    {data.allContentfulTypesOfClaims.edges.map((edge, key) => {
                                        return (
                                            <li key={key}><Link to={`/types-of-claims/${edge.node.slug}`}className="">{edge.node.title}</Link></li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div> 

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-xl mb-2">Follow Us</h3>
                            <nav>
                                <ul className="text-lg flex flex-col gap-2">
                                    <li><a href={siteMetaData.social.facebook} target="__blank" className="flex flex-row items-center"><FaFacebook className="inline mr-1" size={20}/>Facebook</a></li>
                                    <li><a href={siteMetaData.social.linkedin} target="__blank" className="flex flex-row items-center"><FaLinkedin className="inline mr-1" size={20}/>LinkedIn</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                    {/* Logo and Disclaimer */}
                    <div>
                        <StaticImage src="../images/logo-white.webp" className="max-w-[300px] md:max-w-[400px]"/>
                        <div className="text-white text-lg max-w-2xl">
                            <p className="my-4">Hollington Law Firm, LLC is a Colorado litigation law firm that handles residential and commercial construction defect and property insurance claims. Our dedicated team is committed to resolve your home defect and property claims.</p>
                            <p className="my-4">The accounts of recent trials, verdicts, and settlements contained in this website are intended only to illustrate the experience of the law firm. Prospective clients may not obtain the same or similar results as each case is unique.</p>
                        </div>
                    </div>

                </div>

                {/* Footer Links */}
                <div className="text-center">
                    <ul className="flex my-4">
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/disclaimer">Disclaimer</Link></li>
                    </ul>
                    <p className="text-sm text-white">© Copyright <span>{new Date().getFullYear()}</span> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

