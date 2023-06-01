import type { PropsWithChildren } from "react"

import Navbar from "../navbar"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
