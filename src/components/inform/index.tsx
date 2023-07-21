import React, { useState } from "react"
import Footer from "../common/Footer"
import * as S from "./style"
import InformContents from "./contents"
import type { IInformContentsProps } from "./type"

const InformPage = () => {
  const [informData] = useState<IInformContentsProps[]>([
    { title: "입학전형 관련 공지", date: "2023/10/01", isImportant: true },
    { title: "입학전형 관련 공지2", date: "2023/10/01", isImportant: false },
    { title: "입학전형 관련 공지3", date: "2023/10/01", isImportant: true },
    { title: "입학전형 관련 공지4", date: "2023/10/01", isImportant: false },
    { title: "입학전형 관련 공지5", date: "2023/10/01", isImportant: false },
  ])
  return (
    <S.MainComponentLayout>
      <S.InformContentsCol>
        <S.InformNotificationIconBox />
        <S.InformTitleParagraph>공지사항</S.InformTitleParagraph>
        {informData.map((EachInformData, index) => (
          <InformContents
            key={index}
            title={EachInformData.title}
            date={EachInformData.date}
            isImportant={EachInformData.isImportant}
          />
        ))}
      </S.InformContentsCol>
      <Footer />
    </S.MainComponentLayout>
  )
}

export default InformPage
