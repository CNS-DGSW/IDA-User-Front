import React from "react"
import {
  DGSWLogo,
  FooterBox,
  FooterInnerBox,
  FooterParagraph,
  CNSLogo,
  FooterParagraphInnerBox,
  FooterParagraphBox,
  FooterLinkRow,
  FooterLinkBox,
  LinkImg,
} from "./style"
import DGSWLogoPNG from "@/assets/DGSWLogo.png"
import CNSLogoPNG from "@/assets/CNSLogo.png"
import YoutubeSVG from "@/assets/youtube.svg"
import InstaSVG from "@/assets/instagram.svg"

const Footer = () => {
  return (
    <FooterBox>
      <FooterInnerBox>
        <a
          href="https://dgsw.dge.hs.kr/dgswh/main.do?sysId=dgswh"
          target="_blank"
          style={{ width: "104px" }}
          rel="noopener"
        >
          <DGSWLogo src={DGSWLogoPNG} alt="dgsw" />
        </a>
        <FooterParagraph>
          원서접수처 주소 : 대구광역시 달성군 구지면 창리로 11길 93
          대구소프트웨어마이스터고등학교 ( 43010 )
        </FooterParagraph>
        <FooterParagraphBox>
          <FooterParagraphInnerBox>
            교무실 : 053-231-9226
          </FooterParagraphInnerBox>
          <FooterParagraphInnerBox>
            행정실 : 053-231-9215
          </FooterParagraphInnerBox>
          <FooterParagraphInnerBox>FAX : 053-614-0709</FooterParagraphInnerBox>
        </FooterParagraphBox>
        <FooterParagraph>
          대구소프트웨어마이스터고등학교 CNS동아리
          <CNSLogo src={CNSLogoPNG} alt="dgsw" />
        </FooterParagraph>
        <FooterLinkRow>
          <FooterLinkBox
            href="https://www.youtube.com/@softwaremeister"
            target="_blank"
            rel="noopener"
          >
            <LinkImg src={YoutubeSVG} alt="youtube" />
          </FooterLinkBox>
          <FooterLinkBox
            href="https://www.instagram.com/dgsw.it/"
            target="_blank"
            rel="noopener"
          >
            <LinkImg src={InstaSVG} alt="instagram" />
          </FooterLinkBox>
        </FooterLinkRow>
      </FooterInnerBox>
    </FooterBox>
  )
}

export default Footer
