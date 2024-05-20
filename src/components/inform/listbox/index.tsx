import React from "react"
import * as S from "./style"
import InformDateIcon from "@/assets/img/Icon/informDateIcon.svg"
import Link from "next/link"
import type { getInformListResType } from "@/types/Inform/inform.type"

const InformContents = (informData: getInformListResType) => {
  return (
    <Link href={`/inform/${informData.id}`}>
      <S.MainComponentLayout>
        <S.SubComponentLayout>
          <S.ContentsRow isNotAppearInMobile={false}>
            <S.ImportantCheckBox isImportant={informData.isMajor}>
              {informData.isMajor ? "주요공지" : "일반공지"}
            </S.ImportantCheckBox>
            <S.InformContentsTitleParagraph>
              {informData.title}
            </S.InformContentsTitleParagraph>
          </S.ContentsRow>
          <S.ContentsRow isNotAppearInMobile={true}>
            <S.InformContentsDateIconBox>
              <InformDateIcon />
            </S.InformContentsDateIconBox>
            <S.InformContentsDateContextParagraph>
              {(informData.createDate).toString().slice(0,10)}
            </S.InformContentsDateContextParagraph>
          </S.ContentsRow>
        </S.SubComponentLayout>
      </S.MainComponentLayout>
    </Link>
  )
}

export default InformContents
