import React from "react"
import * as S from "./style"
import FAQItem from "../FAQitem/index"
import { useFAQ } from "@/hooks/FAQ/useFAQ"
import { useFAQquery } from "@/hooks/FAQ/useFAQquery"
import FAQitemSkeleton from "../FAQitem/FAQskeleton/index" // 스켈레톤 컴포넌트 import

const FAQList = () => {
  const { activeIndex, toggleFAQ } = useFAQ()
  const { faqQuestionListData, faqQuestionListIsLoading } = useFAQquery()

  return (
    <S.FAQmainContentContainer>
      {faqQuestionListIsLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <FAQitemSkeleton key={index} />
          ))
        : Array.isArray(faqQuestionListData) &&
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
