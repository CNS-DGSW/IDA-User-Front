import { useCallback, useState } from "react"

interface useAsideReturn {
  currentPage: number
  moveNextPage: () => void
  movePreviousPage: () => void
}

const useAside = (): useAsideReturn => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const moveNextPage = useCallback(() => setCurrentPage((prev) => prev + 1), [])
  const movePreviousPage = useCallback(
    () => setCurrentPage((prev) => prev - 1),
    [],
  )
  return { currentPage, moveNextPage, movePreviousPage }
}

export default useAside
