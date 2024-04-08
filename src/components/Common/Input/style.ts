import styled from "styled-components"
import type { InputColor } from "."

export const CustomInput = styled.input<{
  back: InputColor
  isError: boolean
  width?: number
}>`
  border: 1px solid;
  background: ${({ back }) => (back === "gray" ? "#f2f3f5" : "white")};

  width: ${({ width }) => (width ? `${width}px !important` : "310px")};
  height: 48px;

  border-radius: 8px;
  color: #8b939c;
  border-color: ${({ isError }) => (isError ? "#e41616" : "#d8dae0")};

  @media screen and (max-width: 500px) {
    width: ${({ width }) => (width === 294 ? `62.2vw` : "83vw")};
    padding: 0 5.8vw;
  }
`
