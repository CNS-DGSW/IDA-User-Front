import { useEffect, useCallback, useRef } from "react"

type OneOrMore<T> = T | T[]

export interface UseOutsideClickProps {
  container: OneOrMore<HTMLElement | null>
  callback: () => void
}

export const useOutsideClick = ({
  container,
  callback,
}: UseOutsideClickProps) => {
  const containers = useRef<HTMLElement[]>([])

  useEffect(() => {
    containers.current = (
      Array.isArray(container) ? container : [container]
    ).filter((item) => item !== null) as HTMLElement[]
  }, [container])

  const handleClickOutside = useCallback(
    ({ target }: MouseEvent | TouchEvent) => {
      if (target === null) return

      if (containers.current.length === 0) return

      if (containers.current.some((item) => item.contains(target as Node)))
        return

      callback()
    },
    [callback],
  )

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  })
}
