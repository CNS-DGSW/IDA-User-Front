import React from "react"
import * as S from "./style"
import { useChatBot } from "@/hooks/ChatBot/useChatBot"
import type { ChatBotwelcomeGreetingContentPropsType } from "@/types/ChatBot/chatBot.type"
import ChatIcon from "@/assets/Img/Icon/chatIcon.svg"

const ChatBotWelcomeGreetingContent: React.FC<
  ChatBotwelcomeGreetingContentPropsType
> = ({ chat, closeModal }) => {
  const { ...eventAttr } = useChatBot({ closeModal })
  return (
    <S.ChatBotAnswerContainer key={chat.id}>
      <S.ChatBotAnswerContentIcon as={ChatIcon} />
      <S.ChatBotAnswerContentBox>
        {chat.welcomeGreeting.split("\n").map((line: any, index: any) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <div ref={eventAttr.chatBotQuestionsContainerRef}></div>
          </React.Fragment>
        ))}
      </S.ChatBotAnswerContentBox>
    </S.ChatBotAnswerContainer>
  )
}

export default ChatBotWelcomeGreetingContent
