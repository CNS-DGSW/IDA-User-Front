import React from "react"
import * as S from "./style"
import type { FAQListType } from "@/types/FAQ/faq.type"
import FAQListDummyData from "@/constants/FAQ/dummyData/index"
import FAQItem from "../faqItem/index"

const FAQList = () => {
  return (
    <S.FAQmainContentContainer>
      {FAQListDummyData.map((FAQ: FAQListType) => (
        <FAQItem key={FAQ.id} {...FAQ} />
      ))}
    </S.FAQmainContentContainer>
  )
}

export default FAQList
