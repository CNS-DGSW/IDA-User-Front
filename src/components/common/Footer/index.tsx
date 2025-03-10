import React from "react"
import * as S from "./style"
import DGSWLogoSVG from "@/assets/Img/Logo/dgswLogo_color.svg"
import CNSLogoPNG from "@/assets//Img/Logo/cnsLogo.png"
import YoutubeSVG from "@/assets/Img/Icon/youtube.svg"
import InstaSVG from "@/assets/Img/Icon/instagram.svg"

const Footer = () => {
  return (
    <S.FooterLayout>
      <S.FooterInnerBox>
        <a
          href="https://dgsw.dge.hs.kr/dgswh/main.do?sysId=dgswh"
          target="_blank"
          style={{ width: "104px" }}
          rel="noreferrer"
        >
          <S.DGSWLogo as={DGSWLogoSVG} alt="dgsw" />
        </a>
        <S.FooterParagraph>
          원서접수처 주소 : 대구광역시 달성군 구지면 창리로 11길 93
          대구소프트웨어마이스터고등학교 ( 43010 )
        </S.FooterParagraph>
        <S.FooterParagraphBox>
          <S.FooterParagraphInnerBox>
            교무실 : <S.TelLink href="tel:053-231-9226">053-231-9226</S.TelLink>
          </S.FooterParagraphInnerBox>
          <S.FooterParagraphInnerBox>
            행정실 : <S.TelLink href="tel:053-231-9215">053-231-9215</S.TelLink>
          </S.FooterParagraphInnerBox>
          <S.FooterParagraphInnerBox>
            FAX : 053-614-0709
          </S.FooterParagraphInnerBox>
        </S.FooterParagraphBox>
        <S.FooterParagraph>
          대구소프트웨어마이스터고등학교 CNS동아리
          <S.CNSLogo src={CNSLogoPNG} alt="dgsw" />
        </S.FooterParagraph>
        <S.FooterLinkRow>
          <S.FooterLinkBox
            href="https://www.youtube.com/@softwaremeister"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeSVG />
          </S.FooterLinkBox>
          <S.FooterLinkBox
            href="https://www.instagram.com/dgsw.it/"
            target="_blank"
            rel="noreferrer"
          >
            <InstaSVG />
          </S.FooterLinkBox>
        </S.FooterLinkRow>
      </S.FooterInnerBox>
    </S.FooterLayout>
  )
}

export default Footer
