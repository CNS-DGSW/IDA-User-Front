import styled from "styled-components"

export const HandlerLayout = styled.div`
  width: 278px;
  height: 390px;
  border-radius: 24px;
  padding: 40px;
  background-color: ${({ backgroundColor }: { backgroundColor: string }) =>
    backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContextParagragh = styled.p`
  font-weight: bold;
  line-height: 40px;
  color: #fff;
  font-size: 1.5rem;
  word-break: keep-all;
`

export const IconImage = styled.div`
  overflow: hidden;
  width: 135px;
  height: 135px;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 8.05px 24.15px 89.45px -11.63px rgba(22, 52, 80, 0.1);
  margin: 0 auto;
`
