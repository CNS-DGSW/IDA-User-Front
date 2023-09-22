import styled from "styled-components"

const Flex = `
display: flex;
justify-content: center;
align-items: center;
`

export const MainLayout = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  ${Flex}
  z-index: 1;
`

export const ContentsContainerCol = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #c6c9d2;
  ${Flex}
`

export const Input = styled.input`
  padding: 10px 10px;
  width: 300px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #c6c9d2;
  color: #8b939c;
  ::placeholder {
    color: #c6c9d2;
  }
`

export const Title = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1485ee;
  margin-bottom: 30px;
`

export const Context = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #1485ee;
  margin-bottom: 10px;
`

export const ButtonWrapRow = styled.div`
  margin-top: 30px;
  width: 150px;
  display: flex;
  justify-content: space-between;
`

export const Button1 = styled.button`
  box-shadow: none;
  border-radius: 10px;
  border: none;
  background-color: #1485ee;
  color: white;
  font-size: 1rem;
  padding: 7px 20px;
`

export const Button2 = styled.button`
  box-shadow: none;
  border-radius: 10px;
  border: 1px solid #c6c9d2;
  background-color: white;
  color: #c6c9d2;
  font-size: 1rem;
  padding: 7px 20px;
`
