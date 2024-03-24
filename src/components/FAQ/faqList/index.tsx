import React from "react"
import * as S from "./style"
import FAQItem from "../faqItem/index"
import { useFAQ } from "@/hooks/FAQ/useFAQ"
import { useFAQquery } from "@/hooks/FAQ/useFAQquery"

const FAQList = () => {
  const { activeIndex, toggleFAQ } = useFAQ()
  const { faqQuestionListData } = useFAQquery()
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
