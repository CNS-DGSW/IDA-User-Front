import React, { useState } from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import Footer from "@/components/common/Footer"
import { useRouter } from "next/router"

const InformDetailPage = () => {
  const router = useRouter()
  const [informData] = useState<IInformContentsProps>({
    title: "입학전형 관련 공지",
    date: "2023/10/01",
    isImportant: true,
  })
  const informContext = `비포스쿨 공지입니다~ 샬라샬라 샬라샬라 이렇게 하시구 저희 학교는 대구 구지에 위치하고 있습니다~ 샬라샬라 비포스쿨 공지입니다~ 샬라샬라 샬라샬라 이렇게 하시구 저희 학교는 대구 구지에 위치하고 있습니다~ 샬라샬라 비포스쿨 공지입니다~ 샬라샬라 샬라샬라 이렇게 하시구 저희 학교는 대구 구지에 위치하고 있습니다~ 샬라샬라 비포스쿨 공지입니다~ 샬라샬라 샬라샬라 이렇게 하시구 저희 학교는 대구 구지에 위치하고 있습니다~ 샬라샬라 비포스쿨 공지입니다~ 샬라샬라 샬라샬라 이렇게 하시구 저희 학교는 대구 구지에 위치하고 있습니다~ 샬라샬라 비포스쿨 공지입니다~ 샬라샬라 샬라샬라 이렇게 하시구 저희 학교는 대구 구지에 위치하고 있습니다~ 샬라샬라 

[준비물]
- 스케치북
- 유성매직
- 곰인형
- 꽃무늬
- 이불`

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
              <S.ImportantCheckBox isImportant={informData.isImportant}>
                {informData.isImportant ? "주요공지" : "일반공지"}
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
          {informContext}
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
