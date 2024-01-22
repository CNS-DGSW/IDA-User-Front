import styled from "styled-components"

export const RadioContainer = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${({ width }) => (width ? `${width}px` : "208px")};
  height: 48px;
  background: #ffffff;
  border: 1px solid #d8dae0;
  border-radius: 8px;
  padding: 0 14px;

  font-size: 14px;
  word-break: keep-all;

  color: #8b939c;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`
