import styled from "styled-components"

export const SelectContainer = styled.div<{ width?: number; colors?: string }>`
  width: ${({ width }) => (width ? `${width}px` : "208px")};
  height: 48px;
  background: #ffffff;
  border: 1px solid ${({ colors }) => (colors ? `#${colors}` : "#d8dae0")};
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${({ colors }) => (colors ? `#${colors}` : "#8b939c")};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;

  cursor: pointer;

  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const ListContainer = styled.ul<{ direction?: boolean }>`
  position: absolute;
  ${({ direction }) => (direction ? `top: 100%` : `bottom: 100%`)};
  left: 0;
  max-height: 240px;
  overflow-y: scroll;
  border-radius: 8px;
  border: 1px solid #d8dae0;
  z-index: 100;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
  line-height: 17px;

  color: #8b939c;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    padding: 0.3125rem 0.5rem;
  }
`

export const SelectIconWrap = styled.div<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (!isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: 0.2s;
  userselect: none;
  display: flex;
  align-items: center;
`
