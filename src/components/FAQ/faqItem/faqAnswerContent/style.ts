import styled from "styled-components"

const answerTextColor = "#808488"
const CommonContentStyles = styled.div`
  font-family: Pretendard;
`

export const FAQanswerContent = styled(CommonContentStyles)`
  display: flex;
  padding-bottom: 2.3%;
  @media screen and (max-width: 500px) {
    padding-bottom: 6%;
  }
`

export const FAQanswerContentSymbol = styled.h5`
  font-size: 90%;
  font-weight: 500;
  color: ${answerTextColor};
  margin-left: 5%;
  margin-right: 2%;
  line-height: 1.5;
`

export const FAQanswerContentText = styled.h5`
  color: ${answerTextColor};
  font-size: 90%;
  font-weight: 500;
  line-height: 1.5;
`
