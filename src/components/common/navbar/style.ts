import styled, { css, keyframes } from "styled-components"

export const NavbarLayout = styled.nav<{ isDisabled: boolean }>`
  width: 100vw;
  height: 60px;
  position: fixed;
  z-index: 1;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  display: ${({ isDisabled }) => (isDisabled ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  top: 0px;
`

const fadein = keyframes`
  from{
    opacity:0
  }to{
    opacity:1
  }
  `

export const NavbarList = styled.ul<{ isDark: boolean }>`
  width: 989px;
  display: flex;
  justify-content: space-between;
  animation-duration: 1s;
  animation-name: ${fadein};
  transition: 1s;
  svg {
    width: 102px;
    flex-shrink: 0;
    transition: 1s;
    fill: ${({ isDark, theme: { colors } }) =>
      isDark ? colors.gray100 : colors.gray800};
  }

  ${({ isDark, theme: { colors } }) =>
    isDark &&
    css`
      a {
        transition: 1s;
        color: ${colors.gray100};
      }

      ${NavbarDot} {
       transition: 1s;
       background-color: ${colors.gray100};
  }
      }
    `}
`
export const NavbarLeftBox = styled.div``

export const NavbarRightBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
`

export const NavbarAuthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.gray800};
`
