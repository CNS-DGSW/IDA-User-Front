import React from "react"
import * as S from "./style"
import type { ChatBotQuestionsContentPropsType } from "@/types/ChatBot/chatBot.type"

const ChatBotQuestionsContent: React.FC<ChatBotQuestionsContentPropsType> = ({
  question,
}) => {
  return <S.ChatBotQuestionsContentBox>{question}</S.ChatBotQuestionsContentBox>
}

export default ChatBotQuestionsContent
