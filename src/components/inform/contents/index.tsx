import React from "react"
import * as S from "./style"

const InformContents = () => {
  return (
    <S.MainComponentLayout>
      <S.SubComponentLayout>
        <S.ContentsRow>
          <S.ImportantCheckBox isImportant={true}>
            {/* {변수 ? "주요공지" : "일반공지"} */}
          </S.ImportantCheckBox>
          <S.InformContentsTitleParagraph>
            입학전형 관련 공지
          </S.InformContentsTitleParagraph>
        </S.ContentsRow>
        <S.ContentsRow>
          <S.InformContentsDateIconBox />
          <S.InformContentsDateContextParagraph>
            2023/10/01
          </S.InformContentsDateContextParagraph>
        </S.ContentsRow>
      </S.SubComponentLayout>
    </S.MainComponentLayout>
  )
}

export default InformContents
