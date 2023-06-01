import { PageContextType } from "@/components/common/Write/PageProvider"
import { useCallback, useState } from "react"

type usePageReturn = PageContextType

const usePage = (): usePageReturn => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const moveNextPage = useCallback(() => setCurrentPage((prev) => prev + 1), [])
  const movePreviousPage = useCallback(
    () => setCurrentPage((prev) => prev - 1),
    [],
  )
  return { currentPage, moveNextPage, movePreviousPage }
}

export default usePage