import { usePathname } from "next/navigation"

export const useNavBar = () => {
  const pathname = usePathname()
  const checkDisabledNavbar = (): boolean => {
    const disabledPaths = ["/signin", "/signup"]
    const isDisabled = disabledPaths.includes(pathname)
    return isDisabled
  }

  const checkSelectedNavbarItem = (navBarItemHref: string): boolean => {
    const isSelected = navBarItemHref !== "/" && navBarItemHref === pathname
    return isSelected
  }
  return {
    checkDisabledNavbar,
    checkSelectedNavbarItem,
  }
}
