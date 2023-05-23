import Image from "next/image"

import NavbarItem from "./navbarItem/"
import DGSW_LOGO from "@/assets/img/DGSW_LOGO.svg"
import * as S from "./style"

const NavBar = () => {
  return (
    <S.NavbarLayout>
      <S.NavbarList>
        <S.LeftBox>
          <NavbarItem href="/">
            <Image src={DGSW_LOGO} alt="대구소프트웨어마이스터고 로고" />
          </NavbarItem>
        </S.LeftBox>

        <S.RightBox>
          <NavbarItem href="/apply">원서접수</NavbarItem>
          <NavbarItem href="/apply">공지사항</NavbarItem>
          <NavbarItem href="/apply">FAQ</NavbarItem>
          <S.AuthBox>
            <NavbarItem href="/signin">회원가입</NavbarItem>
            <S.Dot />
            <NavbarItem href="/signup">로그인</NavbarItem>
          </S.AuthBox>
        </S.RightBox>
      </S.NavbarList>
    </S.NavbarLayout>
  )
}

export default NavBar
