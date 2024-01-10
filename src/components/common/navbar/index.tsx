import NavbarItem from "./navbarItem/"
import DGSW_LOGO from "@/assets/img/DGSW_LOGO.svg"
import NavBarContentsBtn from "@/assets/NavBarContentsBtn.svg"
import * as S from "./style"
import { useNavBar } from "@/hooks/useNavBar"
import { useState } from "react"

const NavBar = () => {
  const { checkDisabledNavbar, checkFiexdNavbar, isDark } = useNavBar()
  const [isActive, setIsActive] = useState<boolean>(false)
  const isDisabledNavbar = checkDisabledNavbar()
  const isFiexd = checkFiexdNavbar()

  return (
    <S.NavbarLayout
      isDark={isDark}
      isDisabled={isDisabledNavbar}
      isFiexd={isFiexd}
    >
      <S.NavbarList isDark={isDark}>
        <S.NavbarLeftBox>
          <S.ContentsButton onClick={() => setIsActive((prev) => !prev)}>
            <NavBarContentsBtn alt="메뉴 이미지" />
          </S.ContentsButton>
          <NavbarItem href="/">
            <DGSW_LOGO alt="대구소프트웨어 마이스터고 로고" />
          </NavbarItem>
        </S.NavbarLeftBox>

        <S.NavbarRightBox isActive={isActive} isDark={isDark}>
          <S.NavContents>
            <NavbarItem href="/apply">원서접수</NavbarItem>
          </S.NavContents>
          <S.NavContents>
            <NavbarItem href="/inform">공지사항</NavbarItem>
          </S.NavContents>
          <S.NavContents>
            <NavbarItem href="/faq">FAQ</NavbarItem>
          </S.NavContents>
          <S.NavbarAuthBox>
            <S.NavContents>
              <NavbarItem href="/signup">회원가입</NavbarItem>
            </S.NavContents>
            <S.NavbarDot />
            <S.NavContents>
              <NavbarItem href="/signin">로그인</NavbarItem>
            </S.NavContents>
          </S.NavbarAuthBox>
        </S.NavbarRightBox>
      </S.NavbarList>
    </S.NavbarLayout>
  )
}

export default NavBar
