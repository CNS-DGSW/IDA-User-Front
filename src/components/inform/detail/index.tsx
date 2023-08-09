import React, { useState } from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import InformData from "../inform.dummy.json"
import Link from "next/link"

const InformDetailPage = () => {
  const [informData] = useState<IInformContentsProps>(InformData.inform[0])

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
        <Link href="/inform">
          <S.InformDetailBackHyperlinkBox>
            {"< 공지사항으로 돌아가기"}
          </S.InformDetailBackHyperlinkBox>
        </Link>
      </S.InformDetailContentsCol>
    </S.MainComponentLayout>
  )
}

export default InformDetailPage
