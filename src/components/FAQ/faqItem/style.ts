import styled from "styled-components"

const CommonContentStyles = styled.div`
  font-family: Pretendard;
`

export const FAQmainContentContainer = styled.div`
  margin: 3rem 0 8%;
  width: 100%;
  height: 100%;
`

export const FAQmainContent = styled(CommonContentStyles)`
  flex-direction: column;
  border-bottom: 1px solid #e7e9ed;
  align-items: center;
  margin-left: 18.3%;
  width: 61%;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 75%;
  }
`
