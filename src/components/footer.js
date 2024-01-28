import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"

const Footer = () => {
    const siteMetaData = useSiteMetadata()

    return (
        <footer className="w-full py-8 bg-gradient-to-b from-primary to-red-950">
            
            <div className="flex flex-col items-center justify-center gap-8">
                
                {/* Review and Google Maps */}
                <div className="lg:w-full flex flex-col lg:flex-row justify-around items-center gap-8">

                    {/* Review and Social */}
                    <div className="bg-slate-100 p-8 rounded-md shadow-lg mx-4 lg:mx-0">
                        <div className="max-w-[400px]"><StaticImage src="../images/logo.webp" alt="Hollington Law Firm, LLC"/></div>

                        <div className="flex flex-col md:flex-row my-8 gap-12">

                            <div className="text-xl xl:text-2xl text-gray-900">
                                <p>{siteMetaData.contact.address.street}</p>
                                <p className="mb-2">{siteMetaData.contact.address.city}</p>
                                <a href={`tel:${siteMetaData.contact.phone}`} className="text-primary font-bold text-2xl">{siteMetaData.contact.phone}</a>
                            </div>

                            <div className="flex flex-col gap-4 md:justify-between">
                                <ul className="flex gap-6">
                                    <li><a href="https://www.facebook.com" aria-label="facebook" target="__blank"><BsFacebook size={"2em"} className="fill-gray-700 hover:fill-gray-800"/></a></li>
                                    <li><a href="https://www.instagram.com" aria-label="instagram" target="__blank"><BsInstagram size={"2em"} className="fill-gray-700 hover:fill-gray-800"/></a></li>
                                    <li><a href="https://www.youtube.com" aria-label="youtube" target="__blank"><BsYoutube size={"2em"} className="fill-gray-700 hover:fill-gray-800"/></a></li>
                                    <li><a href="https://www.twitter.com" aria-label="twitter" target="__blank"><FaXTwitter size={"2em"} className="fill-gray-700 hover:fill-gray-800"/></a></li>
                                </ul>
                                <a href="https://www.google.com/search?hl=en-US&gl=us&q=Pearman+Law+Firm,+P.C.,+4195+Wadsworth+Blvd,+Wheat+Ridge,+CO+80033&ludocid=875135514616406624&lsig=AB86z5Uae2-vxsFAuTugTeeUfs3X#lrd=0x876b8652f9590597:0xc251b1d270a2260,3" target="_blank" className="bg-primary hover:shadow-lg text-white text-md sm:text-lg font-bold p-2 rounded-lg text-center max-w-[200px]">Review Us</a>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="h-[310px] xl:h-[315px] w-[380px] md:w-[500px] lg:w-[650px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12311.309664568367!2d-104.760204!3d39.5183847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c91fbae5ad14b%3A0x5a7fcd0c8f6d3363!2sParker%20Station!5e0!3m2!1sen!2sus!4v1706473049615!5m2!1sen!2sus" width="100%" height="100%" style={{border: "0", borderRadius: "8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

                {/* Footer Links */}
                <div className="text-center">
                    <ul className="flex my-4">
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/disclaimer">Disclaimer</Link></li>
                        <li className="text-md md:text-lg text-white font-semibold mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/contact">Contact</Link></li>
                    </ul>
                    <p className="text-sm text-white">© Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

