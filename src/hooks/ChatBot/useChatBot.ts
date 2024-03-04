import { useState, useRef, useEffect } from "react"
import type { ChatBotChatContentType } from "@/types/ChatBot/chatBot.type"
import { ChatBotDummyData } from "@/constants/ChatBot/dummyData/index"

interface UseChatBotModalProps {
  closeModal: () => void
}

interface UseChatBotEventResult {
  questions: string
  chatBotChatContent: ChatBotChatContentType
  submittedQuestions: string[]
  visibleDummyCount: number
  chatBotQuestionsContainerRef: React.RefObject<HTMLDivElement>
  showQuestionExamples: boolean
  handleChatBotQuestionsOnChangeEvent: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void
  handleChatBotQuestionsSubmitEvent: () => void
  handleChatBotQuestionsonKeyPressEvent: (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => void
  handleChatBotQuestionsInputFocuse: () => void
  handleBasicQuestionOnClick: (basicQuestionDummyDataId: number) => void
  closeModal: () => void
}

export const useChatBot = ({
  closeModal,
}: UseChatBotModalProps): UseChatBotEventResult => {
  const {
    ChatBotwelcomeGreetingContentDummyData,
    ChatBotBasicQuestionDummyData,
  } = ChatBotDummyData()
  const [chatBotChatContent, setChatBotChatContent] =
    useState<ChatBotChatContentType>({
      questions: "",
      answer: [],
    })
  const { questions } = chatBotChatContent
  const [submittedQuestions, setSubmittedQuestions] = useState<string[]>([])
  const [visibleDummyCount, setVisibleDummyCount] = useState(0)
  const chatBotQuestionsContainerRef = useRef<HTMLDivElement | null>(null)
  const [showQuestionExamples, setShowQuestionExamples] = useState(false)

  const handleChatBotQuestionsOnChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setChatBotChatContent({
      ...chatBotChatContent,
      [e.target.name]: e.target.value,
    })
  }

  const handleChatBotQuestionsSubmitEvent = () => {
    if (questions.trim() !== "") {
      setSubmittedQuestions([...submittedQuestions, questions])
      setChatBotChatContent({
        questions: "",
        answer: [],
      })
    }
  }

  const handleChatBotQuestionsonKeyPressEvent = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      handleChatBotQuestionsSubmitEvent()
    }
  }

  const handleChatBotQuestionsInputFocuse = () => {
    setShowQuestionExamples(true)
  }

  const handleBasicQuestionOnClick = (basicQuestionDummyDataId: number) => {
    const selectedBasicQuestion = ChatBotBasicQuestionDummyData.find(
      (question) => question.id === basicQuestionDummyDataId,
    )

    if (selectedBasicQuestion) {
      setSubmittedQuestions([
        ...submittedQuestions,
        selectedBasicQuestion.basicQuestionText,
      ])
    }
  }

  const handleVisibleDummyCount = () => {
    const intervalId = setInterval(() => {
      if (visibleDummyCount < ChatBotwelcomeGreetingContentDummyData.length) {
        setVisibleDummyCount((prevCount) => prevCount + 1)
      } else {
        clearInterval(intervalId)
      }
    }, 500)
    return intervalId
  }

  const handleScrollIntoView = () => {
    if (chatBotQuestionsContainerRef.current) {
      chatBotQuestionsContainerRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const intervalId = handleVisibleDummyCount()
    return () => clearInterval(intervalId)
  }, [visibleDummyCount])

  useEffect(() => {
    handleScrollIntoView()
  }, [submittedQuestions])

  return {
    questions,
    chatBotChatContent,
    submittedQuestions,
    visibleDummyCount,
    chatBotQuestionsContainerRef,
    showQuestionExamples,
    handleChatBotQuestionsOnChangeEvent,
    handleChatBotQuestionsSubmitEvent,
    handleChatBotQuestionsonKeyPressEvent,
    handleChatBotQuestionsInputFocuse,
    handleBasicQuestionOnClick,
    closeModal,
  }
}
