import styled from "styled-components"
import Image from "next/image"

const FAQquestionTextColor = "#1E2F44"

export const FAQtitleContainer = styled.div`
  background: #fff;
  margin-top: 5rem;
  margin-left: 19.3%;
  @media screen and (max-width: 500px) {
    margin-top: -1.8rem;
    margin-left: 12.3%;
  }
`
export const FAQtitleImage = styled(Image)`
  @media screen and (max-width: 500px) {
    display: none;
  }
`
export const FAQtitleText = styled.div`
  color: ${FAQquestionTextColor};
  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: -5rem;
  @media screen and (max-width: 500px) {
    margin-top: 5rem;
  }
`

export const NewQuestionButton = styled.button`
  float: right;
  padding: 0.8rem 1rem;
  margin: -2.8rem 20.8% 0 0;
  color: white;
  border-radius: 0.5rem;
  background: #1485ee;
  border: none;
  cursor: pointer;

  color: #fff;

  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
`
