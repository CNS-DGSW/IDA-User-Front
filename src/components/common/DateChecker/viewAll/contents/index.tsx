import React from "react"
import * as S from "./style"
import type { IContents } from "../type"

const Contents = ({ title, date, image }: IContents) => {
  return (
    <S.ContentsLayout>
      <S.IconImageBox>{image}</S.IconImageBox>
      <S.TitleParagragh>{title}</S.TitleParagragh>
      <S.ContextParagragh>{date.startDate} ~</S.ContextParagragh>
      <S.ContextParagragh>{date.endDate}</S.ContextParagragh>
    </S.ContentsLayout>
  )
}

export default Contents
