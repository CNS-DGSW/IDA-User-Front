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
      color: ${colors.gray100};
    `}
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
