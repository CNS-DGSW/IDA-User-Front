import NavbarItem from "./navbarItem/"
import DGSW_LOGO from "@/assets/img/DGSW_LOGO.svg"
import * as S from "./style"
import { useNavBar } from "@/hooks/useNavBar"

const NavBar = () => {
  const { checkDisabledNavbar, isDark } = useNavBar()
  const isDisabledNavbar = checkDisabledNavbar()
  return (
    <S.NavbarLayout isDisabled={isDisabledNavbar}>
      <S.NavbarList isDark={isDark}>
        <S.LeftBox>
          <NavbarItem href="/">
            <DGSW_LOGO alt="대구소프트웨어 마이스터고 로고" />
          </NavbarItem>
        </S.LeftBox>

        <S.RightBox>
          <NavbarItem href="/apply">원서접수</NavbarItem>
          <NavbarItem href="/#">공지사항</NavbarItem>
          <NavbarItem href="/#">FAQ</NavbarItem>
          <S.AuthBox>
            <NavbarItem href="/signup">회원가입</NavbarItem>
            <S.NavbarDot />
            <NavbarItem href="/signin">로그인</NavbarItem>
          </S.AuthBox>
        </S.RightBox>
      </S.NavbarList>
    </S.NavbarLayout>
  )
}

export default NavBar
