import React, { useEffect, useState } from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import Footer from "@/components/common/Footer"
import { useRouter } from "next/router"
import InformData from "../inform.dummy.json"
const InformDetailPage = () => {
  const router = useRouter()
  const [informData] = useState<IInformContentsProps>(InformData.inform[0])

  useEffect(() => {}, [])

  const InformHyperLinkHandler = () => {
    router
      .push("/inform")
      .then((e) => console.log(e))
      .catch((e) => console.log(e))
  }
  return (
    <S.MainComponentLayout>
      <S.InformDetailContentsCol>
        <S.InformDetailNotificationIconBox />
        <S.InformDetailTitleRow>
          <S.InformDetailSubTitleRow>
            <S.InformDetailTitleParagraph>
              {informData.title}
            </S.InformDetailTitleParagraph>
            <div>
              <S.ImportantCheckBox isImportant={informData.important}>
                {informData.important ? "주요공지" : "일반공지"}
              </S.ImportantCheckBox>
            </div>
          </S.InformDetailSubTitleRow>
          <S.InformDetailSubTitleRow>
            <S.InformDetailDateIconBox />
            <S.InformDetailDateContextParagraph>
              {informData.date}
            </S.InformDetailDateContextParagraph>
          </S.InformDetailSubTitleRow>
        </S.InformDetailTitleRow>
        <S.InformDetailContextParagraph>
          {informData.context}
        </S.InformDetailContextParagraph>
        <S.InformDetailBackHyperlinkBox onClick={InformHyperLinkHandler}>
          {"< 공지사항으로 돌아가기"}
        </S.InformDetailBackHyperlinkBox>
      </S.InformDetailContentsCol>
      <Footer />
    </S.MainComponentLayout>
  )
}

export default InformDetailPage
