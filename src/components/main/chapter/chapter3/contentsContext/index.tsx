import React from "react"
import * as S from "./style"

interface IContentsContext {
  subTitle: string
  title: string
  context?: string
}

const ContentsContext = ({ subTitle, title, context }: IContentsContext) => {
  return (
    <S.ContentsLayout>
      <S.SubTitleParagragh>{subTitle}</S.SubTitleParagragh>
      <S.TitleParagragh>{title}</S.TitleParagragh>
      <S.ContextParagragh>{context}</S.ContextParagragh>
    </S.ContentsLayout>
  )
}

export default ContentsContext
