import * as S from "./style"
import NavbarItem from "./NavbarItem"
import DGSWLogo from "@/assets/img/Logo/dgswLogo.svg"
import NavBarContentsBtn from "@/assets/img/Icon/navBarContentsBtn.svg"
import { useNavBar } from "@/hooks/useNavBar"
import { useState } from "react"

const NavBarContent = [
  {
    href: "/apply",
    content: "원서접수",
  },
  {
    href: "/inform",
    content: "공지사항",
  },
  {
    href: "/faq",
    content: "FAQ",
  },
]

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
            <DGSWLogo alt="대구소프트웨어 마이스터고 로고" />
          </NavbarItem>
        </S.NavbarLeftBox>

        <S.NavbarRightBox isActive={isActive} isDark={isDark}>
          {NavBarContent.map((item) => (
            <S.NavContents key={item.content}>
              <NavbarItem href={item.href}>{item.content}</NavbarItem>
            </S.NavContents>
          ))}
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
