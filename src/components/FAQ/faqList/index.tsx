import React from "react"
import * as S from "./style"
import FAQItem from "../faqItem/index"
import { useFAQ } from "@/hooks/FAQ/useFAQ"
import { useFAQServerInteraction } from "@/hooks/FAQ/useFAQServerInteraction"

const FAQList = () => {
  const { activeIndex, toggleFAQ } = useFAQ()
  const { faqQuestionListData } = useFAQServerInteraction()
  return (
    <S.FAQmainContentContainer>
      {Array.isArray(faqQuestionListData) &&
        faqQuestionListData.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            title={faq.title}
            isActive={activeIndex === faq.id}
            toggleFAQ={toggleFAQ}
          />
        ))}
    </S.FAQmainContentContainer>
  )
}

export default FAQList
