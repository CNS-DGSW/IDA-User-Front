import React from "react"
import * as S from "./style"
import type { FAQListPropsType } from "@/types/FAQ/faq.type"
import FAQquestionContent from "./faqQuestionContent"
import FAQanswerContent from "./faqAnswerContent"

const FAQItem: React.FC<FAQListPropsType> = ({
  id,
  title,
  isActive,
  toggleFAQ,
}) => {
  return (
    <React.Fragment key={id}>
      <S.FAQmainContent onClick={() => toggleFAQ(id)}>
        <FAQquestionContent id={id} title={title} isActive={isActive} />
        <FAQanswerContent id={id} isActive={isActive} />
      </S.FAQmainContent>
    </React.Fragment>
  )
}

export default FAQItem
