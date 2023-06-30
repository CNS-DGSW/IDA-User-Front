import styled, { css } from "styled-components"

export const Wrap = styled.div<{
  justify?: "space-between" | "center" | "space-around"
}>`
  display: flex;
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  &+& {
    margin-top: 54px;
  }
`

export const SchoolButton = styled.button`
  background: #1485ee;
  border: 1px solid #1485ee;
  border-radius: 8px;
  width: 78px;
  height: 48px;
  color: white;
  margin-left: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`
