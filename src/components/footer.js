import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import { FaFacebook, FaLinkedin, FaXTwitter, FaMapLocation, FaClock, FaEnvelope, FaCalendarCheck} from "react-icons/fa6";

const Footer = () => {
    const siteMetaData = useSiteMetadata()

    return (
        <footer className="w-full py-8 bg-gradient-to-b from-primary to-red-950">
            
            <div className="flex flex-col items-center justify-center gap-8 px-4">
                
                {/* Footer Menu */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-white">

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl mb-2">Quick Links</h3>
                            <nav>
                                <ul className="text-lg flex flex-col gap-1">
                                    <li><Link to="/about-the-firm">About the Firm</Link></li>
                                    <li><Link to="/w-neal-hollington">W. Neal Hollington</Link></li>
                                    <li><Link to="/practice-areas">Cases We Handle</Link></li>
                                    <li><Link to="/areas-served">Areas We Serve</Link></li>
                                    <li><Link to="/articles">Articles</Link></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Contact Us*/}
                        <div>
                            <h3 className="text-xl mb-2">Contact Us</h3>
                            <nav>
                                <ul className="text-lg flex flex-col gap-1">
                                    <li className="flex items-start">
                                        <FaMapLocation className="mr-2 mt-1" size={20} />
                                        <a
                                        href={`http://maps.google.com/?q=${siteMetaData.contact.address.street} ${siteMetaData.contact.address.city}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                        >
                                        {siteMetaData.contact.address.street}<br></br> {siteMetaData.contact.address.city}
                                        </a>
                                    </li>

                                    <li className="flex items-start">
                                        <FaClock className="mr-2 mt-1" size={20} />
                                        Monday through Friday <br></br> 9:00 AM – 5:00 PM (MT)
                                    </li>

                                    <li className="flex items-center">
                                        <FaEnvelope className="mr-2" size={20} />
                                        <Link to="/contact" className="hover:underline">
                                        info@hollingtonlawfirm.com
                                        </Link>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCalendarCheck className="mr-2" size={20} />
                                        <Link to="/schedule-consultation" className="hover:underline">
                                        Schedule Consultation
                                        </Link>
                                    </li>
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
                                    <li><a href={siteMetaData.social.twitter} target="__blank" className="flex flex-row items-center"><FaXTwitter className="inline mr-1" size={20}/>Twitter</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                    {/* Logo and Disclaimer */}
                    <div>
                        <StaticImage src="../images/logo-white.webp" className="max-w-[300px] md:max-w-[400px]"/>
                        <div className="text-white text-lg max-w-2xl">
                            <p className="my-4">Hollington Law Firm, LLC is a Colorado litigation law firm that handles residential and commercial construction defect and property insurance claims. Our dedicated team is committed to resolving your home defect and property claims.</p>
                            <p className="my-4">The accounts of recent trials, verdicts, and settlements contained in this website are intended only to illustrate the experience of the law firm. Prospective clients may not obtain the same or similar results as each case is unique.</p>
                        </div>
                    </div>

                </div>

                {/* Footer Links */}
                <div className="text-center">
                    <ul className="flex my-4">
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/mission-statement">Mission Statement</Link></li>
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

