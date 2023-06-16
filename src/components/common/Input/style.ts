import styled from "styled-components"
import type { InputColor } from "."

export const CustomInput = styled.input<{ background: InputColor }>`
  border: 1px solid #d8dae0;
  background: ${({ background }) =>
    background === "gray" ? "#f2f3f5" : "white"};

  width: ${({ width }) => (width ? `${width}px` : "310px")};
  height: 48px;

  border-radius: 8px;
`
