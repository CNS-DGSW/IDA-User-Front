import Link from "next/link"
import type { PropsWithChildren } from "react"

import * as S from "./style"
import { useNavBar } from "@/hooks/useNavBar"

const NavbarItem = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  const { checkSelectedNavbarItem } = useNavBar()
  const isSelected = checkSelectedNavbarItem(href)

  return (
    <S.NavBarItem isSelected={isSelected}>
      <Link href={href}>{children}</Link>
    </S.NavBarItem>
  )
}

export default NavbarItem
