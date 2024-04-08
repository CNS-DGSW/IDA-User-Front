import React from "react"
import * as S from "./style"
import type { FAQanswerPropsType } from "@/types/FAQ/faq.type"
import { useFAQquery } from "@/hooks/FAQ/useFAQquery"

const FAQanswerContent: React.FC<FAQanswerPropsType> = ({ id, isActive }) => {
  const { getFAQAnswerListDataById } = useFAQquery()

  const { faqAnswerListData, faqAnswerListIsLoading, faqAnswerListIsError } =
    getFAQAnswerListDataById(id)

  return (
    isActive && (
      <S.FAQanswerContent>
        <S.FAQanswerContentSymbol>A.</S.FAQanswerContentSymbol>
        <S.FAQanswerContentText>
          {faqAnswerListIsLoading
            ? "Loading..."
            : faqAnswerListIsError
            ? "Error fetching FAQ"
            : faqAnswerListData
            ? faqAnswerListData.content
            : "정보없음"}
        </S.FAQanswerContentText>
      </S.FAQanswerContent>
    )
  )
}

export default FAQanswerContent
