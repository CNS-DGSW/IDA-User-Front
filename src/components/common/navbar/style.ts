import styled, { css, keyframes } from "styled-components"

export const NavbarLayout = styled.nav<{
  isDisabled: boolean
  isDark: boolean
  isFiexd: boolean
}>`
  display: ${({ isDisabled }) => (isDisabled ? "none" : "flex")};
  width: 100vw;
  min-height: 60px;
  top: 0;
  margin-bottom: 20px;
  z-index: 1;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray400};

  ${({ isDark, theme: { colors } }) =>
    !isDark &&
    css`
      background-color: ${colors.white};
    `}

  ${({ isFiexd }) =>
    isFiexd &&
    css`
      position: fixed;
      top: 0px;
      border-bottom: none;
    `}
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
  @media screen and (max-width: 500px) {
    width: 100%;
    display: block;
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
    `}
`
export const NavbarLeftBox = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray400};
  }
`

export const NavbarRightBox = styled.div<{
  isActive: boolean
  isDark: boolean
}>`
  width: 350px;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    padding-top: ${({ isActive }) => (isActive ? "5px" : "0px")};
    position: absolute;
    height: ${({ isActive }) => (isActive ? "220px" : "0px")};
    display: flex;
    flex-direction: column;
    justify-content: none;
    overflow: hidden;
    width: 100%;
    ${({ isDark, theme: { colors } }) =>
      !isDark &&
      css`
        background-color: ${colors.white};
      `}

    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray400};
  }
`

export const NavbarAuthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: block;
  }
`

export const NavbarDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.gray800};
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const NavContents = styled.div`
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 98%;
    margin: 0px auto;
    margin-bottom: 5px;
    border: 1px solid #e7e9ed;
    border-radius: 8px;
  }
`

export const ContentsButton = styled.div`
  display: none;
  position: absolute;
  right: 0;
  width: 20px;
  margin-right: 1rem;
  @media screen and (max-width: 500px) {
    display: inline-block;
  }
`
