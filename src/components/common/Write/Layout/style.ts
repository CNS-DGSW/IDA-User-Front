import styled from "styled-components"

export const LayoutContainer = styled.div`
  width: 989px;
  margin: 0 auto;
  min-height: 796px;
  padding-bottom: 130px;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`

export const LayoutTitleStyle = styled.div`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.375rem;

  color: #1e2f44;
  margin-bottom: 2.5rem;
  margin-top: 4.25rem;

  @media screen and (max-width: 500px) {
    font-size: 1.125rem;
    width: 300px;
    margin: 2.5rem 0rem 1.125rem 2rem;
    word-break: keep-all;
  }
`

export const WriteContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100vw;
  }
`
