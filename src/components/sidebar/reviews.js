import * as React from "react"
import { FaStar, FaQuoteLeft } from "react-icons/fa6"

const SidebarReviews = () => {

    return (

            <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-4 rounded-md flex flex-col items-center gap-2 shadow-lg">
                
                <div className="flex flex-row gap-1">
                    <FaStar size={25} className={"text-amber-300"}/>
                    <FaStar size={25} className={"text-amber-300"}/>
                    <FaStar size={25} className={"text-amber-300"}/>
                    <FaStar size={25} className={"text-amber-300"}/>
                    <FaStar size={25} className={"text-amber-300"}/>
                </div>

                <h3 className="text-gray-900 text-center text-2xl my-2">Client Reviews</h3>

                <blockquote className="text-gray-900 text-xl italic"><FaQuoteLeft className="mb-2 text-gray-900"/>I appreciate all of the hard work that you have put into completing my case. I am very grateful to you. Before I contacted you, I was hopeless. I have no words to express my gratitude to you. <span> - Emilia Rodriquez</span></blockquote>

            </div>
    )
}

export default SidebarReviews

