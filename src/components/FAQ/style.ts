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
