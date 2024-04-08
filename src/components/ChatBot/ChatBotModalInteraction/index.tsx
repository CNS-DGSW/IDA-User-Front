import React from "react"
import * as S from "./style"
import { useChatBot } from "@/hooks/ChatBot/useChatBot"
import { ChatBotDummyData } from "@/constants/ChatBot/dummyData/index"
import type { ChatBotModalInteractionType } from "@/types/ChatBot/chatBot.type"
import ChatBotWelcomeGreetingContent from "./ChatBotWelcomeGreetingContent/index"
import ChatBotQuestionsContent from "./ChatBotQuestionsContent/index"
import ChatBotBasicQuestionButton from "../ChatBotBasicQuestionButton"
import ChatBotQuestionInput from "../ChatBotQuestionInput"

const ChatBotModalInteraction: React.FC<ChatBotModalInteractionType> = ({
  closeModal,
}) => {
  const { ...eventAttr } = useChatBot({ closeModal })
  const { ...dummyDataAttr } = ChatBotDummyData()

  return (
    <>
      {dummyDataAttr.ChatBotwelcomeGreetingContentDummyData.slice(
        0,
        eventAttr.visibleDummyCount,
      ).map((chat, index) => (
        <ChatBotWelcomeGreetingContent
          key={chat.id}
          chat={chat}
          closeModal={closeModal}
        />
      ))}
      <S.ChatBotQuestionsContentContainer
        showQuestionExamples={eventAttr.showQuestionExamples}
      >
        {eventAttr.submittedQuestions.map((submittedQuestion, index) => (
          <ChatBotQuestionsContent key={index} question={submittedQuestion} />
        ))}
      </S.ChatBotQuestionsContentContainer>

      <S.ChatBotBasicQuestionContainer>
        {eventAttr.showQuestionExamples &&
          dummyDataAttr.ChatBotBasicQuestionDummyData.map(
            (basicQuestionDummyData, index) => (
              <ChatBotBasicQuestionButton
                key={index}
                basicQuestion={basicQuestionDummyData}
                onClick={() => {
                  eventAttr.handleBasicQuestionOnClick(
                    basicQuestionDummyData.id,
                  )
                }}
              />
            ),
          )}
      </S.ChatBotBasicQuestionContainer>
      <div ref={eventAttr.chatBotQuestionsContainerRef}></div>
      <ChatBotQuestionInput
        value={eventAttr.questions}
        onChange={eventAttr.handleChatBotQuestionsOnChangeEvent}
        onKeyPress={eventAttr.handleChatBotQuestionsonKeyPressEvent}
        onFocus={eventAttr.handleChatBotQuestionsInputFocuse}
        onClick={eventAttr.handleChatBotQuestionsSubmitEvent}
      />
    </>
  )
}

export default ChatBotModalInteraction
