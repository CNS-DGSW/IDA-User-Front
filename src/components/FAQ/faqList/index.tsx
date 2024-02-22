import React from "react"
import * as S from "./style"
import type { FAQListType } from "@/types/FAQ/faq.type"
import DummyFAQdata from "@/constants/FAQdummyData/index"
import FAQItem from "../faqItem/index"

const FAQList = () => {
  return (
    <S.FAQmainContentContainer>
      {DummyFAQdata.map((FAQ: FAQListType) => (
        <FAQItem key={FAQ.id} {...FAQ} />
      ))}
    </S.FAQmainContentContainer>
  )
}

export default FAQList
