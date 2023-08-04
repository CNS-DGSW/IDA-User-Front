import React from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import { useRouter } from "next/router"

const InformContents = (props: IInformContentsProps) => {
  const router = useRouter()
  const InformDetailHyperLinkHandler = () => {
    router
      .push(`/inform/${props.idx}`)
      .then(() => {})
      .catch(() => {})
  }
  return (
    <S.MainComponentLayout onClick={InformDetailHyperLinkHandler}>
      <S.SubComponentLayout>
        <S.ContentsRow>
          <S.ImportantCheckBox isImportant={props.important}>
            {props.important ? "주요공지" : "일반공지"}
          </S.ImportantCheckBox>
          <S.InformContentsTitleParagraph>
            {props.title}
          </S.InformContentsTitleParagraph>
        </S.ContentsRow>
        <S.ContentsRow>
          <S.InformContentsDateIconBox />
          <S.InformContentsDateContextParagraph>
            {props.date}
          </S.InformContentsDateContextParagraph>
        </S.ContentsRow>
      </S.SubComponentLayout>
    </S.MainComponentLayout>
  )
}

export default InformContents
