import styled from "styled-components"

export const AsideBox = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 240px;
  gap: 14px;

  @media screen and (max-width: 500px) {
    margin: 2.5rem auto;

    max-width: none;
  }
`
export const LineBox = styled.div`
  height: 1px;
  background: #1485ee;
  margin: 28px 0;
`

export const ButtonFontBox = styled.div`
  font-size: 18px;
`
