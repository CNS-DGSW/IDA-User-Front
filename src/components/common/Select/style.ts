import styled from "styled-components"

export const SelectContainer = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "208px")};
  height: 48px;
  background: #ffffff;
  border: 1px solid #d8dae0;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #8b939c;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;

  cursor: pointer;

  position: relative;
`

export const ListContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  max-height: 240px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #d8dae0;
`

export const ListItem = styled.li<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "208px")};
  height: 26px;
  padding: 0 18px;
  background: #ffffff;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #1485ee;
    color: white;
  }

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #8b939c;
`