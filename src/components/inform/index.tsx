import React from "react"
import Footer from "../common/Footer"
import * as S from "./style"

const InformPage = () => {
  return (
    <S.MainComponentLayout>
      <S.InformContentsCol>
        <S.InformNotificationIconBox />
        <S.InformTitleParagraph>공지사항</S.InformTitleParagraph>
      </S.InformContentsCol>
      <Footer />
    </S.MainComponentLayout>
  )
}

export default InformPage
