import Link from "next/link"
import React from "react"

import * as S from "./style"

interface NavbarItemProps {
  children: React.ReactNode
  href: string
}
const NavbarItem = ({ children, href }: NavbarItemProps) => {
  return (
    <S.NavBarItem>
      <Link href={href}>{children}</Link>
    </S.NavBarItem>
  )
}

export default NavbarItem
