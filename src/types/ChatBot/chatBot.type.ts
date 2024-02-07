export interface ChatBotModalPropsType {
  isOpen: boolean
}

export interface ChatBotModalLayoutPropsType {
  modalOpened: boolean
  closeModal: () => void
  chatBotComponent: any
}

export interface ChatBotModalInteractionType {
  closeModal: () => void
}

export interface ChatBotwelcomeGreetingContentType {
  id: number
  welcomeGreeting: string
}

export interface ChatBotChatContentType {
  questions: string
  answer: ChatBotChatAnswerType[]
}

export interface ChatBotChatAnswerType {
  id: number
  answer: string
}

export interface ChatBotBasicQuestionType {
  id: number
  basicQuestion: string
  basicQuestionText: string
}

export interface ChatBotwelcomeGreetingContentPropsType {
  chat: ChatBotwelcomeGreetingContentType
  closeModal: () => void
}

export interface ChatBotQuestionsContentPropsType {
  question: string
}

export interface ChatBotBasicQuestionButtonPropsType {
  basicQuestion: ChatBotBasicQuestionType
  onClick: () => void
}

export interface ChatBotQuestionInputPropsType {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onFocus: () => void
  onClick: () => void
}
