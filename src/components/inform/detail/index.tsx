import React, { useState } from "react"
import * as S from "./style"
import type { IInformContentsProps } from "../type"
import InformDateIcon from "@/assets/img/Icon/informDateIcon.svg"
import InformIcon from "@/assets/img/Icon/informIcon.svg"
import InformData from "../inform.dummy.json"
import Link from "next/link"
import { useRouter } from "next/router"

const AttachFileTitleList = [
  "2024 신입생 원서접수 방법 안내.pdf",
  "아무튼 이름이 엄청 긴 무언가를 안내하는 첨부파일이라는 것입니다.pdf",
  "3번 게시글",
]

const InformDetailPage = () => {
  const [isAttachFile, setIsAttachFile] = useState<boolean>(true)

  const router = useRouter()
  const [informData] = useState<IInformContentsProps>(
    InformData.inform[Number(router.query.id)],
  )

  if (informData === undefined) {
    return (
      <>
        데이터를 가져오는 중입니다 새로고침 했을 때 데이터 못 가져오는 에러 해결
        요망
      </>
    )
  }

  return (
    <S.MainComponentLayout>
      <S.InformDetailContentsCol>
        <S.InformDetailNotificationIconBox>
          <InformIcon />
        </S.InformDetailNotificationIconBox>
        <S.InformDetailTitleRow>
          <S.InformDetailSubTitleRow>
            <S.InformDetailTitleParagraph>
              {informData?.title}
            </S.InformDetailTitleParagraph>
            <div>
              <S.ImportantCheckBox isImportant={informData?.important}>
                {informData?.important ? "주요공지" : "일반공지"}
              </S.ImportantCheckBox>
            </div>
          </S.InformDetailSubTitleRow>
          <S.InformDetailSubTitleRow>
            <S.InformDetailDateIconBox>
              <InformDateIcon />
            </S.InformDetailDateIconBox>
            <S.InformDetailDateContextParagraph>
              {informData?.date}
            </S.InformDetailDateContextParagraph>
          </S.InformDetailSubTitleRow>
        </S.InformDetailTitleRow>
        <S.InformDetailContextParagraph>
          {informData?.context}
        </S.InformDetailContextParagraph>

        {isAttachFile && (
          <S.AttachedfileLayout>
            <S.AttachedfileBoxWrapper>
              <S.AttachedfileTitle>첨부 파일</S.AttachedfileTitle>
              {AttachFileTitleList.map((title, idx) => (
                <S.AttachedfileBox key={title}>
                  <S.AttachedfileLeftSideBox>
                    <S.FolderIcon />
                    <S.AttachedfileBoxText>{title}</S.AttachedfileBoxText>
                  </S.AttachedfileLeftSideBox>
                </S.AttachedfileBox>
              ))}
            </S.AttachedfileBoxWrapper>
          </S.AttachedfileLayout>
        )}

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
