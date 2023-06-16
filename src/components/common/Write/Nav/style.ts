import styled, { css } from "styled-components"

export const WriteNavStyle = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`

export const Circle = styled.div<{ colors: boolean; background: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ colors }) => (colors ? "#1485ee" : "#D8DAE0")};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  ${({ background }) =>
    background &&
    css`
      background: #1485ee;
    `}

  color: ${({ colors }) => (colors ? "#ffffff" : "#D8DAE0")};
  cursor: pointer;
`

export const Wrap = styled.div<{ colors: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  color: ${({ colors }) => (colors ? "#000" : "#8B939C")};
`

export const Line = styled.div<{ colors: boolean }>`
  width: 20px;
  height: 1px;
  background-color: ${({ colors }) => (colors ? "#1485ee" : "#D8DAE0")};
`
