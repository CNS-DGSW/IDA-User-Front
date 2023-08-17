import { usePathname } from "next/navigation"
import { useRecoilValue } from "recoil"

import { isDarkNavbarState } from "@/atom/navBarAtom"

export const useNavBar = () => {
  const pathname = usePathname()
  const isDark = useRecoilValue(isDarkNavbarState)

  const checkDisabledNavbar = (): boolean => {
    const disabledPaths = ["/signin", "/signup"]
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
