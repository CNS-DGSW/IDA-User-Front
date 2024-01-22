import styled from "styled-components"
import Image from "next/image"

const textColor = "#1E2F44"
const answerTextColor = "#808488"

const CommonContentStyles = styled.div`
  font-family: Pretendard;
`

export const FAQmainContentContainer = styled.div`
  margin: 3rem 0 8% 1%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 500px) {
    margin-left: -5%;
  }
`

export const FAQmainContent = styled(CommonContentStyles)`
  display: block;
  border-bottom: 1px solid #e7e9ed;
  align-items: center;
  margin-left: 18.3%;
  width: 61%;
  height: 100%;
  cursor: pointer;
`

export const FAQquestionContent = styled(CommonContentStyles)`
  display: flex;
  padding: 2.5% 0 1.5%;
`

export const FAQquestionContentSymbol = styled.h5`
  color: ${textColor};
  font-size: 120%;
  font-weight: 600;
  margin-right: 2%;
`

export const FAQquestionContentText = styled.h5`
  color: #000;
  width: 30vw;
  font-size: 100%;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const FAQselectImage = styled(Image)<{ rotation: boolean }>`
  margin-left: 2%;
  ${({ rotation }) => rotation && "transform: rotate(180deg)"};
  transition: transform 0.3s ease;
`

export const FAQanswerContent = styled(CommonContentStyles)`
  display: flex;
  padding-bottom: 2.3%;
`

export const FAQanswerContentSymbol = styled.h5`
  font-size: 90%;
  font-weight: 500;
  color: ${answerTextColor};
  margin-left: 5%;
  margin-right: 2%;
`

export const FAQanswerContentText = styled.h5`
  color: ${answerTextColor};
  font-size: 90%;
  font-weight: 500;
`

export const FAQModifyMainContent = styled.div`
  display: block;
  border-bottom: 1px solid #e7e9ed;
  border-radius: 5px;
  align-items: center;
  margin-left: 18.3%;
  width: 61%;
  height: 100%;
  padding: 0 3rem 0 1rem;
  cursor: pointer;
  background-color: #f8fafd;
`

export const FAQModifyQuestionContentText = styled.input`
  width: 82.8%;
  color: ${textColor};
  font-size: 100%;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  border-radius: 5px;
  background: #fff;
`

export const FAQModifyAnswerContentText = styled.input`
  width: 95%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${answerTextColor};
  font-size: 90%;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background: #fff;
`

export const FAQModifyAnswerContentSymbol = styled.h5`
  font-size: 90%;
  font-weight: 500;
  color: ${answerTextColor};
  margin-left: 5%;
  margin-right: 2%;
  padding-top: 0.5rem;
`
