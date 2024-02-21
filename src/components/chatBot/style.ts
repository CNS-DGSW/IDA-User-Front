import styled from "styled-components"
import Image from "next/image"

export const ChatbotLayout = styled.div`
  position: fixed;
  display: block;
  right: -10rem;
  bottom: -11rem;

  transition: transform 250ms;

  :hover {
    transform: translateY(-1rem);
  }
`

export const ChatBotSpeechBubbleIcon = styled(Image)`
  width: 100%;
  height: 100%;
  animation: ChatBotSpeechBubbleIconmove 0.7s ease-in 0s infinite alternate;

  @keyframes ChatBotSpeechBubbleIconmove {
    0% {
      margin-bottom: -5rem;
    }
    100% {
      margin-bottom: -4.8rem;
    }
  }
`

export const ChatbotBtnIcon = styled(Image)`
  width: 100%;
  height: 100%;
  padding-left: 8rem;
  position: relative;
`
