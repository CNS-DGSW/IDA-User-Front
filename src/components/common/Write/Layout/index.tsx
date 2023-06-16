import Footer from "@/components/common/Footer"
import PageProvider from "@/components/common/Write/PageProvider"
import React, { PropsWithChildren } from "react"
import { LayoutContainer, WriteContainer } from "./style"

/**
 *
 * @todo write nav 생성
 */
const WriteLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <PageProvider>
        <LayoutContainer>
          <PageProvider.WriteNav />
          <PageProvider.LayoutTitle />
          <WriteContainer>
            <PageProvider.WriteCurrentPage>
              {children}
            </PageProvider.WriteCurrentPage>
            <PageProvider.Aside />
          </WriteContainer>
        </LayoutContainer>
      </PageProvider>
      <Footer />
    </>
  )
}

export default WriteLayout
