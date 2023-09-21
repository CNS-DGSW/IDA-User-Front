import React, { useState } from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import InformDateIcon from "@/assets/img/Icon/informDateIcon.svg"
import InformIcon from "@/assets/img/Icon/informIcon.svg"
import InformData from "../inform.dummy.json"
import Link from "next/link"
import { useRouter } from "next/router"

const InformDetailPage = () => {
  const router = useRouter()
  const [informData] = useState<IInformContentsProps>(
    InformData.inform[Number(router.query.id)],
  )

  return (
    <S.MainComponentLayout>
      <S.InformDetailContentsCol>
        <S.InformDetailNotificationIconBox>
          <InformIcon />
        </S.InformDetailNotificationIconBox>
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
            <S.InformDetailDateIconBox>
              <InformDateIcon />
            </S.InformDetailDateIconBox>
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
