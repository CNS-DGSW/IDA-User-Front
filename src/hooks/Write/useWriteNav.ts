import React, { useState } from "react"

const useWriteNav = () => {
  const isBrowser = typeof window !== "undefined"
  const [width] = useState<number>(isBrowser ? window.innerWidth : 0)

  const checkWidth = (isSameIdx: boolean): boolean => {
    if (width > 500) return true
    else {
      if (isSameIdx) return true
      return false
    }
  }

  return { width, checkWidth }
}

export default useWriteNav
