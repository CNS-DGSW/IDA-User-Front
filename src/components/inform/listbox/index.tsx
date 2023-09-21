import React from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import InformDateIcon from "@/assets/img/Icon/informDateIcon.svg"
import Link from "next/link"

const InformContents = ({
  idx,
  important,
  title,
  date,
}: IInformContentsProps) => {
  return (
    <Link href={`/inform/${idx}`}>
      <S.MainComponentLayout>
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
            <S.InformContentsDateIconBox>
              <InformDateIcon />
            </S.InformContentsDateIconBox>
            <S.InformContentsDateContextParagraph>
              {date}
            </S.InformContentsDateContextParagraph>
          </S.ContentsRow>
        </S.SubComponentLayout>
      </S.MainComponentLayout>
    </Link>
  )
}

export default InformContents
