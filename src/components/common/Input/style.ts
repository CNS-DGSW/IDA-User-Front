import styled from "styled-components"
import type { InputColor } from "."

export const CustomInput = styled.input<{ back: InputColor }>`
  border: 1px solid #d8dae0;
  background: ${({ back }) => (back === "gray" ? "#f2f3f5" : "white")};

  width: ${({ width }) => (width ? `${width}px` : "310px")};
  min-height: 48px;

  border-radius: 8px;
  color: #8b939c;
`
