import styled, { css } from "styled-components"

export const NavBarItem = styled.li<{ isSelected: boolean }>`
  padding: 11px 9px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  height: 35px;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #1485ee;
      > a {
        color: white;
      }
    `}
`
