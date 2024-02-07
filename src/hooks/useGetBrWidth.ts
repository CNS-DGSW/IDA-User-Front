import { useEffect, useState } from "react"

const useGetBrWidth = () => {
  const isBrowser = typeof window !== "undefined"
  const [browserWidth, setWidth] = useState<number>(
    isBrowser ? window.innerWidth : 0,
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const checkWidth = (isSameIdx: boolean): boolean => {
    if (browserWidth > 500) return true
    else {
      if (isSameIdx) return true
      return false
    }
  }

  return { browserWidth, checkWidth }
}

export default useGetBrWidth
