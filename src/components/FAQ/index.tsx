import React, { useState } from "react"
import * as S from "./style"
import FAQicon from "../../assets/FAQicon.png"
import selectIcon from "../../assets/selectIcon.png"
import dummyFAQdata from "../../components/FAQ/dummyData/index"

const FAQ = () => {
  const [activeImageRotations, setActiveImageRotations] = useState<number[]>([])

  const toggleFAQ = (id: number) => {
    if (activeImageRotations.includes(id)) {
      setActiveImageRotations([])
    } else {
      setActiveImageRotations([id])
    }
  }

  return (
    <>
      <S.FAQtitleContainer>
        <S.FAQtitleImage src={FAQicon} alt="Error" />
        <S.FAQtitleText>자주 묻는 질문</S.FAQtitleText>
      </S.FAQtitleContainer>
      <S.FAQmainContentContainer>
        {dummyFAQdata.map((FAQ) => (
          <div key={FAQ.id}>
            <S.FAQmainContent>
              <S.FAQquestionContent onClick={() => toggleFAQ(FAQ.id)}>
                <S.FAQquestionContentSymbol>Q.</S.FAQquestionContentSymbol>
                <S.FAQquestionContentText>
                  {FAQ.question}
                </S.FAQquestionContentText>
                <S.FAQselectImage
                  src={selectIcon}
                  alt="Error"
                  rotation={activeImageRotations.includes(FAQ.id)}
                />
              </S.FAQquestionContent>
              {activeImageRotations.includes(FAQ.id) && (
                <S.FAQanswerContent>
                  <S.FAQanswerContentSymbol>A.</S.FAQanswerContentSymbol>
                  <S.FAQanswerContentText>{FAQ.answer}</S.FAQanswerContentText>
                </S.FAQanswerContent>
              )}
            </S.FAQmainContent>
          </div>
        ))}
      </S.FAQmainContentContainer>
    </>
  )
}

export default FAQ
