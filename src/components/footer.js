import * as React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../utilities/use-site-metadata"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"

const Footer = () => {
    const siteMetaData = useSiteMetadata()
    return (
        <footer class="w-full bg-primary py-8">
            
            <div class="flex flex-col items-center justify-center">
                
                <ul className="flex gap-3">
                    <li><a href={siteMetaData.social.facebook} aria-label="facebook"><BsFacebook size={"1.75em"} className="fill-gray-200 hover:fill-gray-300"/></a></li>
                    <li><a href={siteMetaData.social.instagram} aria-label="instagram"><BsInstagram size={"1.75em"} className="fill-gray-200 hover:fill-gray-300"/></a></li>
                    <li><a href={siteMetaData.social.youtube} aria-label="youtube"><BsYoutube size={"1.75em"} className="fill-gray-200 hover:fill-gray-300"/></a></li>

                </ul>

                <ul className="flex my-4">
                    <li className="text-sm md:text-lg font-semibold text-gray-200 mx-2 transition-colors duration-300 hover:text-gray-300"><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li className="text-sm md:text-lg text-gray-200 font-semibold mx-2 transition-colors duration-300 hover:text-gray-300"><Link to="/contact">Contact</Link></li>
                </ul>
                <p class="text-sm text-gray-300">© Copyright 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

