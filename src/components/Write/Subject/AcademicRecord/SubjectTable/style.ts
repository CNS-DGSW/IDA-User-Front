import styled from "styled-components"

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 34px;
  gap: 14px;
`

export const DeleteBtn = styled.button`
  box-shadow: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  background-color: #1485ee;
  color: #fff;
  padding: 0.5rem 0.875rem;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    border-radius: 0.125rem;
    font-size: 0.25rem;
    padding: 0.25rem 0.075rem;
  }
`
