import React from "react"
import HandlerBox from "./handlerbox"
import * as S from "./style"
import Inform from "./inform"
import ContentsTitle from "./contentsTitle"
import ContentsContext from "./contentsContext"
import LinkSection from "./linkSection"

const Chapter3 = () => {
  return (
    <>
      <LinkSection />
      <S.Chapter3Layout>
        <S.ContentsLayoutCol className="layout">
          <S.HandlerWrapRow>
            {Inform.handlerInfo.map((information, i) => (
              <HandlerBox
                key={i}
                context={information.context}
                backgroundColor={information.backgroundColor}
              />
            ))}
          </S.HandlerWrapRow>
        </S.ContentsLayoutCol>
        <S.ContentsTitleParagragh>Information</S.ContentsTitleParagragh>
        <ContentsTitle
          title={Inform.ContentsTitleInfo[0].title}
          context={Inform.ContentsTitleInfo[0].context}
        />
        <S.ContentsWrapSection></S.ContentsWrapSection>
        <S.ContentsWhiteSpaceBox />
        <ContentsTitle
          title={Inform.ContentsTitleInfo[1].title}
          context={Inform.ContentsTitleInfo[1].context}
        />
        <S.ContentsWrapSection>
          <ContentsContext
            subTitle="2018~2022"
            title="매년 마이스터고 평균 취업률보다 높은 취업률을 기록"
          />
        </S.ContentsWrapSection>
        <S.ContentsWrapSection>
          <ContentsContext
            subTitle="약 1500만원"
            title="고등학교 평균 예산보다 더 많은 예산 구비"
            context="많은 예산으로 재학생들을 적극 지원해 재학생들의 꿈이 이루어질 수 있도록 노력합니다."
          />
        </S.ContentsWrapSection>
      </S.Chapter3Layout>
    </>
  )
}

export default Chapter3
