import styled from "styled-components"

export const ScoreButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 18px;

  border-radius: 8px;
  border: 1px solid #d8dae0;
  color: #8b939c;
  background-color: #f9f9f9;
  font-size: 14px;

  &:active {
    background-color: #e9e9e9;
  }
`

export const ButtonContext = styled.p`
  margin-left: 4px;
`

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 18px;
`
