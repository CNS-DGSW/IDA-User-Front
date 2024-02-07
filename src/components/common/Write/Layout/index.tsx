import PageProvider from "@/components/common/Write/PageProvider"
import React, { useEffect, useState } from "react"
import type { PropsWithChildren } from "react"
import { LayoutContainer, WriteContainer } from "./style"

/**
 *
 * @todo write nav 생성
 */
const WriteLayout = ({ children }: PropsWithChildren) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (!domLoaded) return <></>
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
    </>
  )
}

export default WriteLayout
