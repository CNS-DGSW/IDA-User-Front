import type { PropsWithChildren } from "react"

import Navbar from "../navbar"
// TDOO
// import Footer from "../Footer"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
