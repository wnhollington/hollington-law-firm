import * as React from "react"
import { Link } from "gatsby"

const LandingPageFooter = () => {

    return (
        <footer className="w-full py-8 bg-gradient-to-b from-primary to-red-950">
            
            <div className="flex flex-col items-center justify-center gap-8">

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

export default LandingPageFooter

