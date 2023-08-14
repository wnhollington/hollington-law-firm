import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer class="w-full bg-primary py-8">
            
            <div class="flex flex-col items-center justify-center">

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

