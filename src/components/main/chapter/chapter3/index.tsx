import React from "react"
import HandlerBox from "./handlerbox"
import * as S from "./style"
import Inform from "./inform"
import ContentsTitle from "./contentsTitle"
import ContentsContext from "./contentsContext"
import LinkSection from "./linkSection"
import Gragh from "./gragh"
import Contact from "./contact"
import MainFileImage from "@/assets/img/mainFileImage.svg"
import DownloadIcon from "@/assets/img/Icon/downloadIcon.svg"

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
                index={i}
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
        <S.ContentsWrapSection>
          <S.ContentsSection1ImageBox>
            <S.ContentsSection1ImageFilterBox />
            <MainFileImage />
          </S.ContentsSection1ImageBox>
          <S.ContentsSection1ContextWrapCol>
            <S.ContentsSection1TitleParagragh>
              모집요강 파일,
              <br />
              신입생 모집의 모든 것
            </S.ContentsSection1TitleParagragh>
            <S.ContentsSection1ContextParagragh>
              신입생 모집요강입니다. 밑에 다운로드 버튼을 누르면 모집요강 파일이
              다운로드 됩니다.
            </S.ContentsSection1ContextParagragh>
            <S.ContentsSection1DownloadButton>
              <p>다운로드</p>
              <S.ContentsSection1DownloadIconBox>
                <DownloadIcon />
              </S.ContentsSection1DownloadIconBox>
            </S.ContentsSection1DownloadButton>
          </S.ContentsSection1ContextWrapCol>
        </S.ContentsWrapSection>
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
          <Gragh
            startColor="#1485EE"
            endColor="#F7F9FD"
            percent={[96.6, 98.3, 96.4, 88.1, 91.5]}
            boxWidth={370}
            boxheight={375}
          />
        </S.ContentsWrapSection>
        <S.ContentsWrapSection>
          <ContentsContext
            subTitle="약 1500만원"
            title="고등학교 평균 예산보다 더 많은 예산 구비"
            context="많은 예산으로 재학생들을 적극 지원해 재학생들의 꿈이 이루어질 수 있도록 노력합니다."
          />
          <S.ContentsSection3WrapRow>
            4.5
            <S.ContentsSection3SubContextParagragh>
              배
            </S.ContentsSection3SubContextParagragh>
          </S.ContentsSection3WrapRow>
        </S.ContentsWrapSection>
      </S.Chapter3Layout>
      <Contact />
    </>
  )
}

export default Chapter3
