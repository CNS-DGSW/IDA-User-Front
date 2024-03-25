import styled from "styled-components"
import Image from "next/image"

export const ChatBotModalLayout = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 3rem;
  bottom: 3rem;
  width: 22rem;
  height: 33rem;
  border-radius: 1.5rem;
  background-color: #f8fafd;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(30, 47, 68, 0.25) inset;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 3.5rem;
  overflow: auto;
`

export const ExitChatBotModalContainer = styled.div`
  position: fixed;
  display: flex;
  right: 4rem;
`

export const ExitChatBotModalBtnIcon = styled(Image)`
  cursor: pointer;
`
