import React, { useEffect, useState } from "react"
import Footer from "../common/Footer"
import * as S from "./style"
import InformContents from "./contents"
import type { IInformContentsProps } from "./type"
import InformData from "./inform.dummy.json"

const InformPage = () => {
  const [informData, setInformData] = useState<IInformContentsProps[]>([])
  useEffect(() => {
    const dummyData: IInformContentsProps[] = [...InformData.inform]
    setInformData([...dummyData])
  }, [])
  return (
    <S.MainComponentLayout>
      <S.InformContentsCol>
        <S.InformNotificationIconBox />
        <S.InformTitleParagraph>공지사항</S.InformTitleParagraph>
        {informData?.map((EachInformData, index) => (
          <InformContents
            key={index}
            title={EachInformData.title}
            date={EachInformData.date}
            important={EachInformData.important}
            context={EachInformData.context}
            idx={EachInformData.idx}
          />
        ))}
      </S.InformContentsCol>
      <Footer />
    </S.MainComponentLayout>
  )
}

export default InformPage
