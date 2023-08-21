import styled from "styled-components"
import Image from "next/image"

const FAQquestionTextColor = "#1E2F44"
const FAQanswerTextColor = "#808488"

export const FAQtitleContainer = styled.div`
  background: #fff;
`
export const FAQtitleImage = styled(Image)`
  width: 13%;
  height: 13%;
  margin-top: 4%;
  margin-left: 15.4%;
`
export const FAQtitleText = styled.div`
  color: ${FAQquestionTextColor};
  font-family: Pretendard;
  font-size: 175%;
  font-weight: 700;
  margin-left: 20%;
  margin-top: -5%;
`

export const FAQmainContentContainer = styled.div`
  margin-top: 4%;
  margin-bottom: 8%;
`

export const FAQmainContent = styled.div`
  display: block;
  border-bottom: 1px solid #e7e9ed;
  align-items: center;
  width: 61%;
  padding-bottom: 1%;
  margin-left: 20%;
  margin-top: 2%;
`
export const FAQquestionContent = styled.div`
  display: flex;
`

export const FAQquestionContentSymbol = styled.h5`
  color: ${FAQquestionTextColor};
  font-family: Pretendard;
  font-size: 120%;
  font-weight: 600;
  margin-right: 2%;
`

export const FAQquestionContentText = styled.h5`
  color: #000;
  font-family: Pretendard;
  font-size: 100%;
  font-weight: 600;
`

export const FAQselectImage = styled(Image)<{ rotation: boolean }>`
  width: 2.6%;
  height: 2.6%;
  margin-left: auto;
  ${({ rotation }) => rotation && "transform: rotate(180deg)"};
  transition: transform 0.3s ease;
`

export const FAQanswerContent = styled.div`
  display: flex;
  padding-top: 2%;
  padding-bottom: 1%;
`

export const FAQanswerContentSymbol = styled.h5`
  font-family: Pretendard;
  font-size: 90%;
  font-weight: 500;
  color: ${FAQanswerTextColor};
  margin-left: 5%;
  margin-right: 2%;
`
export const FAQanswerContentText = styled.h5`
  color: ${FAQanswerTextColor};
  font-family: Pretendard;
  font-size: 90%;
  font-weight: 500;
`
