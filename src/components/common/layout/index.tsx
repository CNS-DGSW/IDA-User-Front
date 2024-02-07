import type { PropsWithChildren } from "react"
import * as S from "./style"

import Navbar from "../navbar"
import Footer from "../Footer"
// TDOO
// import Footer from "../Footer"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <S.UpperFooterBox>
        <Navbar />
        <main>{children}</main>
      </S.UpperFooterBox>
      <Footer />
    </>
  )
}

export default Layout
