import React from "react"
import * as S from "./style"
import MessageIcon from "@/assets/img/Icon/Message.svg"
import HomeIcon from "@/assets/img/Icon/Home.svg"
import Notification from "@/assets/img/Icon/Group 115.svg"

interface HandlerBoxProps {
  backgroundColor: string
  context: string
  index: number
}
const HandlerBox = ({ context, backgroundColor, index }: HandlerBoxProps) => {
  return (
    <S.HandlerLayout backgroundColor={backgroundColor}>
      <S.ContextParagragh>{context}</S.ContextParagragh>
      <S.IconImage>
        {index === 0 && <HomeIcon />}
        {index === 1 && <Notification />}
        {index === 2 && <MessageIcon />}
      </S.IconImage>
    </S.HandlerLayout>
  )
}

export default HandlerBox
