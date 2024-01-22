import * as S from "./style"
import Link from "next/link"
import type { PropsWithChildren } from "react"
import { useNavBar } from "@/hooks/useNavBar"

const NavbarItem = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  const { checkSelectedNavbarItem } = useNavBar()
  const isSelected = checkSelectedNavbarItem(href)

  return (
    <Link href={href}>
      <S.NavBarItem isSelected={isSelected}>{children}</S.NavBarItem>
    </Link>
  )
}

export default NavbarItem
