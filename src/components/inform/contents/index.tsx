import React, { useState } from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"

const InformContents = (props: IInformContentsProps) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <S.MainComponentLayout
      isHover={isHover}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.SubComponentLayout>
        <S.ContentsRow>
          <S.ImportantCheckBox
            isImportant={props.isImportant}
            isHover={isHover}
          >
            {props.isImportant ? "주요공지" : "일반공지"}
          </S.ImportantCheckBox>
          <S.InformContentsTitleParagraph>
            {props.title}
          </S.InformContentsTitleParagraph>
        </S.ContentsRow>
        <S.ContentsRow>
          <S.InformContentsDateIconBox />
          <S.InformContentsDateContextParagraph>
            {props.date}
          </S.InformContentsDateContextParagraph>
        </S.ContentsRow>
      </S.SubComponentLayout>
    </S.MainComponentLayout>
  )
}

export default InformContents
