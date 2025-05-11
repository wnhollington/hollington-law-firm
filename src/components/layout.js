import * as React from "react"

import Header from "../components/header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-[72px] lg:pt-[72px]">{children}</main>
      <Footer />
    </>
  )
}

export default Layout