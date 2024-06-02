import React from "react"
import * as S from "./style"
import FAQicon from "@/assets/Img/Icon/FAQicon.svg"
import FAQList from "./FAQlist"

const FAQ = () => {
  return (
    <>
      <S.FAQtitleContainer>
        <S.FAQtitleImage as={FAQicon} alt="Image loading error." />
        <S.FAQtitleText>자주 묻는 질문</S.FAQtitleText>
      </S.FAQtitleContainer>
      <FAQList />
    </>
  )
}

export default FAQ
