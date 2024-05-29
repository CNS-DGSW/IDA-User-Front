import styled from "styled-components"

export const TextAreaStyle = styled.textarea<{ height?: number }>`
  display: block;
  border: 1px solid #d8dae0;
  background: white;
  width: 100%;
  border-radius: 8px;
  color: #8b939c;
  resize: none;
  outline: none;
  padding: 14px 22px;

  height: ${({ height }) => height && `${height}px`};
`
