import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    const siteMetaData = useSiteMetadata()

    return (
        <footer className="w-full py-8 bg-gradient-to-b from-primary to-red-950">
            
            <div className="flex flex-col items-center justify-center gap-8">
                
                {/* Review and Google Maps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:w-full xl:flex xl:justify-around xl:gap-0">

                    {/* Review and Social */}
                    <div className="bg-slate-100 p-8 rounded-md shadow-lg mx-4 lg:mx-0">
                        <div className="max-w-[300px]"><StaticImage src="../images/logo.webp" alt="Hollington Law Firm, LLC"/></div>

                        <div className="text-gray-900 flex flex-col gap-4 mt-8">
                            <div>
                                <div className="flex flex-col lg:flex-row text-xl md:text-2xl">
                                    <p>{siteMetaData.contact.address.street}</p>
                                    <p className="lg:ml-2">{siteMetaData.contact.address.city}</p>
                                </div>
                                <p className="text-lg">(By Appointment Only)</p>
                            </div>
                            
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                                <a href={`tel:${siteMetaData.contact.phone}`} rel="noreferrer" className="text-primary font-semibold text-xl flex flex-row items-center gap-2"><FaPhone /><span>{siteMetaData.contact.phone}</span></a>

                                <a href="https://www.google.com/search?q=Hollington+Law+Firm&stick=H4sIAAAAAAAA_-NgU1I1qDCySLNMNk1LMra0SEo0TTG0MqgwSzRLSzQ0T0s1S0kzNk8zXsQq7JGfk5OZl16Sn6fgk1iu4JZZlAsAXk_E0j8AAAA&hl=en&mat=CepMbkCQWLifElUB7PxHsYBEoV3eZFKnGdD__mzClPzl338t9kTx9AbNUJotqu2WZMAKFdVATqKHSGU04cnLatjanJRwXLbESdYiFe5ehw6P65Zv2f97BjGUhV5mBKga&authuser=0#lrd=0x28f9c5fb398ba5d1:0x6a6fa17fe6df37f3,3,,,," target="_blank" rel="noreferrer" className="bg-primary hover:shadow-lg text-white text-md sm:text-lg font-bold p-2 rounded-lg text-center max-w-[200px]">Leave Us a Review</a>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="mx-4 min-h-[300px] xl:w-5/12 backdrop-blur-sm bg-white/80 rounded-md">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.2922517439824!2d-104.7595407!3d39.507893200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c9149eef34c6f%3A0x84a58ef8811837c2!2s11479%20S%20Pine%20Dr%2C%20Parker%2C%20CO%2080134!5e0!3m2!1sen!2sus!4v1706626106221!5m2!1sen!2sus" width="100%" height="100%" style={{border: "0", borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title={`Directions to ${siteMetaData.title}`}></iframe>
                    </div>

                </div>

                {/* Footer Links */}
                <div className="text-center">
                    <ul className="flex my-4">
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/disclaimer">Disclaimer</Link></li>
                        <li className="text-md md:text-lg text-white font-semibold mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/contact">Contact</Link></li>
                    </ul>
                    <p className="text-sm text-white">© Copyright <span>{new Date().getFullYear()}</span> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

