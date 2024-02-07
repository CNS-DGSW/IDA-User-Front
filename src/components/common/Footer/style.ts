import Image from "next/image"
import styled from "styled-components"

export const FooterLayout = styled.div`
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 284px;
  background: #f2f4f8;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 320px;
    font-size: 10px;
  }
`

export const FooterInnerBox = styled.div`
  width: 989px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`

export const DGSWLogo = styled(Image)`
  width: 104px;
  margin-bottom: 27px;

  @media screen and (max-width: 500px) {
    width: 80px;
    height: 25px;
  }
`

export const FooterParagraph = styled.p`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    margin-bottom: 12px;
    word-break: keep-all;
    line-height: 200%;
  }
`

export const FooterParagraphBox = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  font-weight: 600;

  @media screen and (max-width: 500px) {
    display: block;
  }
`

export const FooterParagraphInnerBox = styled.p`
  & + & {
    border-left: 1px solid #424344;
    margin-left: 8px;
    padding-left: 8px;

    @media screen and (max-width: 500px) {
      border: none;
      margin-left: 0px;
      padding-left: 0px;
      margin-top: 6px;
    }
  }
  height: 12px;
  display: flex;
  align-items: center;
`

export const CNSLogo = styled(Image)`
  width: 22px;
  margin-left: 6px;
`

export const LinkImg = styled(Image)``

export const FooterLinkRow = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
`

export const FooterLinkBox = styled.a`
  width: 36px;
  height: 36px;
  background: #d8dae0;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const TelLink = styled.a`
  color: black;
  text-decoration: none;
`
