import React from "react"
import * as S from "./style"
import PaperPlaneIcon from "@/assets/Img/Icon/paperPlaneIcon.svg"
import type { ChatBotQuestionInputPropsType } from "@/types/ChatBot/chatBot.type"

const ChatBotQuestionInput: React.FC<ChatBotQuestionInputPropsType> = ({
  value,
  onChange,
  onKeyPress,
  onFocus,
  onClick,
}) => {
  return (
    <S.ChatBotQuestionsInputContainer>
      <S.ChatBotQuestionsInputBox
        placeholder="질의 사항을 입력해주세요"
        name="questions"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
      />
      <S.ChatBotQuestionsSubmitBtn as={PaperPlaneIcon} onClick={onClick} />
    </S.ChatBotQuestionsInputContainer>
  )
}

export default ChatBotQuestionInput
