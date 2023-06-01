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
    fill: ${({ isDark, theme: { colors } }) =>
      isDark ? colors.gray100 : colors.gray800};
  }

  ${({ isDark, theme: { colors } }) =>
    isDark &&
    css`
      a {
        color: ${colors.gray100};
      }

      .dot {
        background-color: ${isDark ? colors.gray100 : colors.gray800};
  }
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
  border-radius: 50%;
`
