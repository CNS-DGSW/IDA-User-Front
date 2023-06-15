import usePage from "@/hooks/Write/usePage"
import React, { createContext, PropsWithChildren, useContext } from "react"
import { Aside } from "../Aside"

export interface PageContextType {
  currentPage: number
  moveNextPage: () => void
  movePreviousPage: () => void
}

const PageContext = createContext<PageContextType>({
  currentPage: 1,
  moveNextPage: () => {},
  movePreviousPage: () => {},
})

export const usePageContext = () => {
  const context = useContext(PageContext)

  if (!context) {
    throw new Error("Page 컴포넌트 외부에서는 렌더링 될 수 없습니다.")
  }

  return context
}

const PageProvider = ({ children }: PropsWithChildren<unknown>) => {
  const pageProviderProps = usePage()
  return (
    <PageContext.Provider value={pageProviderProps}>
      {children}
    </PageContext.Provider>
  )
}

export default Object.assign(PageProvider, { Aside })
