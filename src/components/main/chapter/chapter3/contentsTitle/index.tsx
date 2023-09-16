import React from "react"
import * as S from "./style"

interface IContentsTitle {
  title: string
  context?: string
}

const ContentsTitle = ({ title, context }: IContentsTitle) => {
  return (
    <>
      <S.TitleParagragh>{title}</S.TitleParagragh>
      {context && <S.ContextParagragh>{context}</S.ContextParagragh>}
    </>
  )
}

export default ContentsTitle
