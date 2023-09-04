import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import BioMenu from "../components/menus/bioMenu"

const Bio= () => {
  return (
    <div className="flex flex-col md:flex-row my-4 gap-6">
        <StaticImage src="../images/neal.png" alt="W. Neal Hollington"/>
        <BioMenu/>
    </div>
  )
}

export default Bio