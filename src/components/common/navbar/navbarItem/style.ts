import styled, { css } from "styled-components"

export const NavBarItem = styled.li<{ isSelected: boolean }>`
  padding: 11px 9px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 35px;
  ${({ isSelected, theme: { colors } }) =>
    isSelected &&
    css`
      background-color: ${colors.blue400};
      > a {
        color: ${colors.gray100};
      }
    `}
`
