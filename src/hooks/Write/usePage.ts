import type { PageContextType } from "@/components/common/Write/PageProvider"
import { useCallback, useState } from "react"
import type { MouseEventHandler } from "react"

type usePageReturn = PageContextType

const usePage = (): usePageReturn => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const moveNextPage = useCallback(() => setCurrentPage((prev) => prev + 1), [])
  const movePreviousPage = useCallback(
    () => setCurrentPage((prev) => prev - 1),
    [],
  )
  const movePage: MouseEventHandler<HTMLDivElement> = (e) => {
    setCurrentPage(Number((e.target as HTMLDivElement).innerText))
  }
  return { currentPage, moveNextPage, movePreviousPage, movePage }
}

export default usePage
