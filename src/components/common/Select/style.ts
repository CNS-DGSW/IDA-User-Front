import styled from "styled-components"

export const SelectContainer = styled.div`
  width: 208px;
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
`

export const ListItem = styled.li`
  width: 208px;
  height: 48px;
  padding: 0 18px;
  background: #ffffff;
  border: 1px solid #d8dae0;
  display: flex;
  align-items: center;
`
