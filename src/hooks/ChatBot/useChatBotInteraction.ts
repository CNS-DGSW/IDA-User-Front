import { useState } from "react"

export const useChatBotInteraction = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleChatBotBtnClick = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen)
  }
  return {
    isModalOpen,
    handleChatBotBtnClick,
  }
}
