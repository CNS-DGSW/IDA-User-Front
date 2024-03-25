import styled, { css } from "styled-components"

export const Wrap = styled.div<{
  justify?: "space-between" | "center" | "space-around"
  column?: boolean
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

  @media screen and (max-width: 500px) {
    ${({ column }) => column && `flex-direction: column;`}
    & > div:not(:first-child) {
      margin-top: 2.25rem;
    }
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
