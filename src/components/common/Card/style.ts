import styled from "styled-components"

export const CardContainer = styled.article`
  display: block;
  background: #f8fafd;
  border-radius: 8px;
  padding: 40px 34px;
  width: 718px;
  @media screen and (max-width: 500px) {
    width: 86%;
    margin: auto;
  }

  & + & {
    margin-top: 54px;
  }
`
