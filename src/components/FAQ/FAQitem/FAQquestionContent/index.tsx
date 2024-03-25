import React from "react"
import * as S from "./style"
import type { FAQquestionPropsType } from "@/types/FAQ/faq.type"
import SelectIcon from "@/assets/Img/Icon/selectIcon.svg"

const FAQquestionContent: React.FC<FAQquestionPropsType> = ({
  id,
  title,
  isActive,
}) => {
  return (
    <S.FAQquestionContent>
      <S.FAQquestionContentSymbol>Q.</S.FAQquestionContentSymbol>
      <S.FAQquestionContentText>{title}</S.FAQquestionContentText>
      <S.FAQselectImage
        as={SelectIcon}
        alt="FAQquestionContent Image loading error."
        rotation={isActive}
      />
    </S.FAQquestionContent>
  )
}
export default FAQquestionContent
