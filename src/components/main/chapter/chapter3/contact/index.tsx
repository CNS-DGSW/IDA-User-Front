import React from "react"
import * as S from "./style"

const Contact = () => {
  return (
    <S.MainLayout>
      <S.SubLayout>
        <S.SubTitleParagragh>a consultation call</S.SubTitleParagragh>
        <S.TitleParagragh>상담 전화는 여기로 부탁드려요</S.TitleParagragh>
        <S.ContextParagragh>
          문의 사항은 전화주시면 친절히 상담해 드립니다.
          <br />
          053-231-9226 / 053-231-9218 / 053-231-9219
        </S.ContextParagragh>
      </S.SubLayout>
    </S.MainLayout>
  )
}

export default Contact
