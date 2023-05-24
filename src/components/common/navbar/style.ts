import styled, { css } from "styled-components"

export const NavbarLayout = styled.nav<{ isDisabled: boolean }>`
  width: 100vw;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  display: ${({ isDisabled }) => (isDisabled ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`

export const NavbarList = styled.ul<{ isDark: boolean }>`
  width: 989px;
  display: flex;
  justify-content: space-between;

  svg {
    fill: ${({ isDark }) => (isDark ? "#E7E9ED" : "#1E2F44")};
  }

  ${({ isDark }) =>
    isDark &&
    css`
      a {
        color: #e7e9ed;
      }

      .dot {
        background-color: #e7e9ed;
      }
    `}
`
export const LeftBox = styled.div``

export const RightBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
`

export const AuthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #424344;
  border-radius: 50%;
`
