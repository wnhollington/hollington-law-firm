import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BioMenu from "../components/menus/bioMenu"

const Bio= () => {
  return (
    <div className="flex flex-col md:flex-row my-2 p-2 gap-6 shadow-md rounded-md">
        <StaticImage src="../images/neal.png" alt="W. Neal Hollington"/>
        <BioMenu/>
    </div>
  )
}

export default Bio