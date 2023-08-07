import React from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import { useRouter } from "next/router"

const InformContents = ({
  idx,
  important,
  title,
  date,
}: IInformContentsProps) => {
  const router = useRouter()
  const InformDetailHyperLinkHandler = () => {
    router
      .push(`/inform/${idx}`)
      .then(() => {})
      .catch(() => {})
  }
  return (
    <S.MainComponentLayout onClick={InformDetailHyperLinkHandler}>
      <S.SubComponentLayout>
        <S.ContentsRow>
          <S.ImportantCheckBox isImportant={important}>
            {important ? "주요공지" : "일반공지"}
          </S.ImportantCheckBox>
          <S.InformContentsTitleParagraph>
            {title}
          </S.InformContentsTitleParagraph>
        </S.ContentsRow>
        <S.ContentsRow>
          <S.InformContentsDateIconBox />
          <S.InformContentsDateContextParagraph>
            {date}
          </S.InformContentsDateContextParagraph>
        </S.ContentsRow>
      </S.SubComponentLayout>
    </S.MainComponentLayout>
  )
}

export default InformContents
