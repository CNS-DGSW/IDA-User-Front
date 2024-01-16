import { useEffect, useState } from "react"

const useWriteNav = () => {
  const isBrowser = typeof window !== "undefined"
  const [width, setWidth] = useState<number>(isBrowser ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
