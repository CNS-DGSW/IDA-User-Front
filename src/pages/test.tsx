import Aside from "@/components/common/Write/Aside"
import React from "react"
import PageProvider from "@/components/common/Write/PageProvider"
import Footer from "@/components/common/Footer"

const test = () => {
  return (
    <PageProvider>
      <Aside />
      <Footer />
    </PageProvider>
  )
}

export default test
