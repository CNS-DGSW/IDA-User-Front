import Link from "next/link"
import React from "react"

import * as S from "./style"
import { useNavBar } from "@/hooks/useNavBar"

interface NavbarItemProps {
  children: React.ReactNode
  href: string
}
const NavbarItem = ({ children, href }: NavbarItemProps) => {
  const { checkSelectedNavbarItem } = useNavBar()
  const isSelected = checkSelectedNavbarItem(href)

  return (
    <S.NavBarItem isSelected={isSelected}>
      <Link href={href}>{children}</Link>
    </S.NavBarItem>
  )
}

export default NavbarItem
