import PageProvider from "@/components/common/Write/PageProvider"
import React from "react"
import { LayoutContainer, LayoutTitle, WriteContainer } from "./style"
import { WriteLayoutProps } from "./types"

/**
 *
 * @todo write nav 생성, 원서 접수 current 컴포넌트 check
 */
const WriteLayout = ({ children, title }: WriteLayoutProps) => {
  return (
    <PageProvider>
      <LayoutContainer>
        <LayoutTitle>{title}</LayoutTitle>
        <WriteContainer>
          {children}
          <PageProvider.Aside />
        </WriteContainer>
      </LayoutContainer>
    </PageProvider>
  )
}

export default WriteLayout
