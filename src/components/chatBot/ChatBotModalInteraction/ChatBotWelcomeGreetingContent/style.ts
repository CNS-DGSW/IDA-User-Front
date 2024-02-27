import styled from "styled-components"
import Image from "next/image"

export const ChatBotAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChatBotAnswerContentBox = styled.div`
  border-radius: 1.5rem 1.5rem 1.5rem 0.2rem;
  background: #f8fafd;
  color: #1e2f44;
  font-family: Pretendard;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 10px 0px rgba(30, 47, 68, 0.15);
  padding: 0.8rem;
  max-width: 90%;
`

export const ChatBotAnswerContentIcon = styled(Image)`
  margin-right: 0.3rem;
`
