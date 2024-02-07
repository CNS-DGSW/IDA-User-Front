import React from "react"
import * as S from "./style"
import type { ChatBotBasicQuestionButtonPropsType } from "@/types/ChatBot/chatBot.type"

const ChatBotBasicQuestionButton: React.FC<
  ChatBotBasicQuestionButtonPropsType
> = ({ basicQuestion, onClick }) => {
  return (
    <S.ChatBotBasicQuestionBtnBox onClick={onClick}>
      {basicQuestion.basicQuestionText}
    </S.ChatBotBasicQuestionBtnBox>
  )
}

export default ChatBotBasicQuestionButton
