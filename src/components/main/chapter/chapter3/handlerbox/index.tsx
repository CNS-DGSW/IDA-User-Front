import React from "react"
import * as S from "./style"

interface HandlerBoxProps {
  backgroundColor: string
  context: string
}
const HandlerBox = ({ context, backgroundColor }: HandlerBoxProps) => {
  return (
    <S.HandlerLayout backgroundColor={backgroundColor}>
      <S.ContextParagragh>{context}</S.ContextParagragh>
      <S.IconImage />
    </S.HandlerLayout>
  )
}

export default HandlerBox
