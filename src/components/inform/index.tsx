import React from "react"
import Footer from "../common/Footer"
import * as S from "./style"
import InformContents from "./contents"

const InformPage = () => {
  return (
    <S.MainComponentLayout>
      <S.InformContentsCol>
        <S.InformNotificationIconBox />
        <S.InformTitleParagraph>공지사항</S.InformTitleParagraph>
        <InformContents />
        <InformContents />
        <InformContents />
        <InformContents />
        <InformContents />
      </S.InformContentsCol>
      <Footer />
    </S.MainComponentLayout>
  )
}

export default InformPage
