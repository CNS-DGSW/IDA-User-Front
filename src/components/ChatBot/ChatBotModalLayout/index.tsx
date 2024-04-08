import React from "react"
import { createPortal } from "react-dom"
import * as S from "./style"
import type { ChatBotModalLayoutPropsType } from "@/types/ChatBot/chatBot.type"
import ExitChatBotModalIcon from "@/assets/Img/icon/exitChatBotModalIcon.svg"

const ChatBotModalLayout: React.FC<ChatBotModalLayoutPropsType> = ({
  modalOpened,
  closeModal,
  chatBotComponent,
}) => {
  return (
    modalOpened &&
    createPortal(
      <S.ChatBotModalLayout>
        <S.ExitChatBotModalContainer>
          <S.ExitChatBotModalBtnIcon
            as={ExitChatBotModalIcon}
            onClick={closeModal}
          />
        </S.ExitChatBotModalContainer>
        {chatBotComponent}
      </S.ChatBotModalLayout>,
      document.getElementById("modal-root") as HTMLDivElement,
    )
  )
}

export default ChatBotModalLayout
