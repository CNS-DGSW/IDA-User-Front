import PageProvider from "@/components/common/Write/PageProvider"
import React, { PropsWithChildren } from "react"
import { LayoutContainer, LayoutTitle, WriteContainer } from "./style"

interface WriteLayoutProps extends PropsWithChildren {
  title: string
}

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
