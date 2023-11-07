import * as React from "react"
import { Link } from "gatsby"
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"
import {FaXTwitter} from "react-icons/fa6"

const Footer = () => {

    return (
        <footer className="w-full bg-primary py-8">
            
            <div className="flex flex-col items-center justify-center">
                
                <ul className="flex gap-6">
                    <li><a href="https://www.facebook.com" aria-label="facebook" target="__blank"><BsFacebook size={"1.75em"} className="fill-white hover:fill-gray-200"/></a></li>
                    <li><a href="https://www.instagram.com" aria-label="instagram" target="__blank"><BsInstagram size={"1.75em"} className="fill-white hover:fill-gray-200"/></a></li>
                    <li><a href="https://www.youtube.com" aria-label="youtube" target="__blank"><BsYoutube size={"1.75em"} className="fill-white hover:fill-gray-200"/></a></li>
                    <li><a href="https://www.twitter.com" aria-label="twitter" target="__blank"><FaXTwitter size={"1.75em"} className="fill-white hover:fill-gray-200"/></a></li>
                </ul>

                <ul className="flex my-4">
                    <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li className="text-md md:text-lg font-semibold text-white mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/disclaimer">Disclaimer</Link></li>
                    <li className="text-md md:text-lg text-white font-semibold mx-2 transition-colors duration-300 hover:text-gray-200"><Link to="/contact">Contact</Link></li>
                </ul>
                <p className="text-sm text-white">© Copyright 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

