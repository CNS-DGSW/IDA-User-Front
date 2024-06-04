import React from "react"
import * as S from "./style"
import InformDateIcon from "@/assets/img/Icon/informDateIcon.svg"
import InformIcon from "@/assets/img/Icon/informIcon.svg"
import Link from "next/link"
import { useRouter } from "next/router"
import { useInformQuery } from "@/hooks/Inform/useInformQuery"

const InformDetailPage = () => {
  const router = useRouter()
  const id: string = (router.query.id ?? "").toString()

  const { getInformById } = useInformQuery()
  const { informGetData } = getInformById(id)

  return (
    <form>
      <S.MainComponentLayout>
        <S.InformDetailContentsCol>
          <S.InformDetailNotificationIconBox>
            <InformIcon />
          </S.InformDetailNotificationIconBox>
          <S.InformDetailTitleRow>
            <S.InformDetailSubTitleRow>
              <S.InformDetailTitleParagraph>
                {informGetData?.title}
              </S.InformDetailTitleParagraph>
              <div>
                <S.ImportantCheckBox isImportant={informGetData?.isMajor}>
                  {informGetData?.isMajor ? "주요공지" : "일반공지"}
                </S.ImportantCheckBox>
              </div>
            </S.InformDetailSubTitleRow>
            <S.InformDetailSubTitleRow>
              <S.InformDetailDateIconBox>
                <InformDateIcon />
              </S.InformDetailDateIconBox>
              <S.InformDetailDateContextParagraph>
                {informGetData?.createDate.toString().slice(0, 10)}{" "}
                {informGetData?.createDate.toString().slice(11, 19)}
              </S.InformDetailDateContextParagraph>
            </S.InformDetailSubTitleRow>
          </S.InformDetailTitleRow>
          <S.InformDetailContextParagraph
            dangerouslySetInnerHTML={{ __html: informGetData?.content ?? "" }}
          />

          {(informGetData?.fileResponse ?? []).length > 0 && (
            <S.AttachedfileLayout>
              <S.AttachedfileBoxWrapper>
                <S.AttachedfileTitle>첨부 파일</S.AttachedfileTitle>
                {informGetData?.fileResponse.map((file) => (
                  <S.AttachedfileLink
                    key={file.originalName}
                    target="_blank"
                    href={file.filePath}
                  >
                    <S.AttachedfileLeftSideBox>
                      <S.FolderIcon />
                      <S.AttachedfileBoxText>
                        {file.originalName}
                      </S.AttachedfileBoxText>
                    </S.AttachedfileLeftSideBox>
                  </S.AttachedfileLink>
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
    </form>
  )
}

export default InformDetailPage
