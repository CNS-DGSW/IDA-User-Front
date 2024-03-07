import styled from "styled-components"
import Image from "next/image"

const textColor = "#1E2F44"
const CommonContentStyles = styled.div`
  font-family: Pretendard;
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
  transition: transform 0.25s ease;
`
