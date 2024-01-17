import styled from "styled-components"
import type { InputColor } from "."

export const CustomInput = styled.input<{ back: InputColor; isError: boolean }>`
  border: 1px solid;
  background: ${({ back }) => (back === "gray" ? "#f2f3f5" : "white")};

  width: ${({ width }) => (width ? `${width}px` : "310px")};
  height: 48px;

  border-radius: 8px;
  color: #8b939c;
  border-color: ${({ isError }) => (isError ? "#e41616" : "#d8dae0")};

  @media screen and (max-width: 500px) {
    width: 310px;
  }
`
