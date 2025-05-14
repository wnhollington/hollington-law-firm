import * as React from "react"

import Header from "../components/header"
import Footer from "./footer"
import Analytics from "./analytics"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Analytics />
      <main className="pt-[72px] lg:pt-[72px]">{children}</main>
      <Footer />
    </>
  )
}

export default Layout