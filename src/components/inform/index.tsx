import React, { useEffect, useState } from "react"
import * as S from "./style"
import InformContents from "./listbox"
import type { IInformContentsProps } from "./type"
import InformIcon from "@/assets/img/Icon/informIcon.svg"
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
        <S.InformNotificationIconBox>
          <InformIcon />
        </S.InformNotificationIconBox>
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
    </S.MainComponentLayout>
  )
}

export default InformPage
