import { usePathname } from "next/navigation"
import { isDarkNavbarState } from "@/atom/navBarAtom"
import { useEffect } from "react"
import { useAtom } from "jotai"

export const useNavBar = () => {
  const pathname = usePathname()
  const [isDark, setIsDark] = useAtom(isDarkNavbarState)

  useEffect(() => {
    setIsDark(false)
  }, [])

  const checkDisabledNavbar = (): boolean => {
    const disabledPaths = [""]
    // ["/signin", "/signup"]
    const isDisabled = disabledPaths.includes(pathname)
    return isDisabled
  }
  const checkFiexdNavbar = (): boolean => {
    return pathname === "/"
  }

  const checkSelectedNavbarItem = (navBarItemHref: string): boolean => {
    const isSelected = navBarItemHref !== "/" && navBarItemHref === pathname
    return isSelected
  }
  return {
    isDark,
    checkDisabledNavbar,
    checkSelectedNavbarItem,
    checkFiexdNavbar,
  }
}
