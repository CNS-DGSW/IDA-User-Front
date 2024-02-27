import React, { useState } from "react"
import * as S from "./style"
import type { FAQListType } from "@/types/FAQ/faq.type"
import SelectIcon from "@/assets/Img/Icon/selectIcon.svg"

const FAQItem: React.FC<FAQListType> = ({ id, question, answer }) => {
  const [activeImageRotations, setActiveImageRotations] = useState<number[]>([])

  const toggleFAQ = (id: number) => {
    setActiveImageRotations((prevRotations) =>
      prevRotations.includes(id) ? [] : [id],
    )
  }

  return (
    <div key={id}>
      <S.FAQmainContent>
        <S.FAQquestionContent onClick={() => toggleFAQ(id)}>
          <S.FAQquestionContentSymbol>Q.</S.FAQquestionContentSymbol>
          <S.FAQquestionContentText>{question}</S.FAQquestionContentText>
          <S.FAQselectImage
            as={SelectIcon}
            alt="Image loading error."
            rotation={activeImageRotations.includes(id)}
          />
        </S.FAQquestionContent>
        {activeImageRotations.includes(id) && (
          <S.FAQanswerContent>
            <S.FAQanswerContentSymbol>A.</S.FAQanswerContentSymbol>
            <S.FAQanswerContentText>{answer}</S.FAQanswerContentText>
          </S.FAQanswerContent>
        )}
      </S.FAQmainContent>
    </div>
  )
}
export default FAQItem
