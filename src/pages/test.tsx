import Aside from "../components/common/Write/Aside"
import useAside from "../hooks/Write/useAside"
import React from "react"

const test = () => {
  const { currentPage, moveNextPage, movePreviousPage } = useAside()
  return (
    <div>
      <Aside
        moveNextPage={moveNextPage}
        currentPage={currentPage}
        movePreviousPage={movePreviousPage}
      />
    </div>
  )
}

export default test
