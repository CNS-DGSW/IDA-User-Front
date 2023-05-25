import { PageContext } from "@/components/common/Write/PageProvider"
import { useCallback, useState } from "react"

type usePageReturn = PageContext

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
