import React, { useCallback, useState } from "react"

const useAside = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const moveNextPage = useCallback(() => setCurrentPage((prev) => prev + 1), [])
  const movePreviousPage = useCallback(
    () => setCurrentPage((prev) => prev - 1),
    [],
  )
  return { currentPage, moveNextPage, movePreviousPage }
}

export default useAside
