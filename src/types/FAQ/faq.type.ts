export interface FAQidPropsType {
  faqId: number
}

export interface FAQquestionPropsType {
  id: number
  title: string
  isActive: boolean
}

export interface FAQanswerPropsType {
  id: number
  isActive: boolean
}

export interface FAQListPropsType {
  id: number
  title: string
  isActive: boolean
  toggleFAQ: (id: number) => void
}

export interface FAQListType {
  id: number
  title: string
  content: string
}
