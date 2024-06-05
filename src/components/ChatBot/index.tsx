import React from "react"
import * as S from "./style"
import ChatBotBtnIcon from "@/assets/Img/Icon/chatBotBtnIcon.svg"
import ChatBotSpeechBubbleIcon from "@/assets/Img/Icon/chatBotSpeechBubbleIcon.svg"
import ChatBotModalLayout from "./ChatBotModalLayout/index"
import ChatBotInteraction from "./ChatBotModalInteraction"
import { useChatBotInteraction } from "@/hooks/ChatBot/useChatBotInteraction"

const ChatBot = () => {
  const { ...attr } = useChatBotInteraction()

  return (
    <>
      <S.ChatbotLayout>
        {attr.isModalOpen ? (
          <ChatBotModalLayout
            modalOpened={attr.isModalOpen}
            closeModal={attr.handleChatBotBtnClick}
            chatBotComponent={
              <ChatBotInteraction closeModal={attr.handleChatBotBtnClick} />
            }
          />
        ) : (
          <>
            <S.ChatBotSpeechBubbleIcon
              as={ChatBotSpeechBubbleIcon}
              alt="Image loading error."
            ></S.ChatBotSpeechBubbleIcon>
            <S.ChatbotBtnIcon
              as={ChatBotBtnIcon}
              width={100}
              height={100}
              alt="Image loading error."
              onClick={attr.handleChatBotBtnClick}
            ></S.ChatbotBtnIcon>
          </>
        )}
      </S.ChatbotLayout>
    </>
  )
}

export default ChatBot
