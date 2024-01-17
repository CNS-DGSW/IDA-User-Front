import styled from "styled-components"
import Image from "next/image"

const textColor = "#1E2F44"
const answerTextColor = "#808488"

const CommonContentStyles = styled.div`
  font-family: Pretendard;
`

export const FAQmainContentContainer = styled.div`
  margin: 3rem 0 8%;
  width: 100%;
  height: 100%;
`

export const FAQmainContent = styled(CommonContentStyles)`
  display: block;
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

export const FAQquestionContent = styled(CommonContentStyles)`
  display: flex;
  padding: 1.7rem 0 1rem;
`

export const FAQquestionContentSymbol = styled.h5`
  color: ${textColor};
  font-size: 120%;
  font-weight: 600;
  margin-right: 2%;
  margin-top: -0.05rem;
`

export const FAQquestionContentText = styled.h5`
  color: #000;
  width: 100%;
  font-size: 100%;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FAQselectImage = styled(Image)<{ rotation: boolean }>`
  margin-left: 10%;
  ${({ rotation }) => rotation && "transform: rotate(180deg)"};
  transition: transform 0.3s ease;
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
