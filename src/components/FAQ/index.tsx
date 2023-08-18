import React, { useState } from "react"
import * as S from "./style"
import FAQicon from "../../assets/FAQicon.png"
import selectIcon from "../../assets/selectIcon.png"
import dummyFAQdata from "../../components/FAQ/dummyData/index"

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [imageRotations, setImageRotations] = useState<{
    [key: number]: number
  }>({})

  const toggleFAQ = (id: number) => {
    if (activeFAQ === id) {
      setActiveFAQ(null)
      setImageRotations({})
    } else {
      setActiveFAQ(id)
      setImageRotations({ [id]: 180 })
    }
  }

  return (
    <div>
      <S.titleContainer>
        <S.titleImage src={FAQicon} alt="Error" />
        <S.titleText>자주 묻는 질문</S.titleText>
      </S.titleContainer>
      <S.mainContentContainer>
        {dummyFAQdata.map((FAQ) => (
          <div key={FAQ.id}>
            <S.mainContent>
              <S.questionContent onClick={() => toggleFAQ(FAQ.id)}>
                <S.questionContentSymbol>Q.</S.questionContentSymbol>
                <S.questionContentText>{FAQ.question}</S.questionContentText>
                <S.selectImage
                  src={selectIcon}
                  alt="Error"
                  rotation={imageRotations[FAQ.id] || 0}
                />
              </S.questionContent>
              {activeFAQ === FAQ.id && (
                <S.answerContent>
                  <S.answerContentSymbol>A.</S.answerContentSymbol>
                  <S.answerContentText>{FAQ.answer}</S.answerContentText>
                </S.answerContent>
              )}
            </S.mainContent>
          </div>
        ))}
      </S.mainContentContainer>
    </div>
  )
}

export default FAQ
