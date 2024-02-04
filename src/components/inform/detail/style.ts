import styled from "styled-components"
import folderIcon from "@/assets/img/Icon/folderIcon.svg"

interface IIsImportant {
  isImportant: boolean
}
export const MainComponentLayout = styled.div`
  width: 100%;
  min-height: 70vh;

  @media screen and (max-width: 500px) {
    margin-top: 15.2vw;
    padding-bottom: 19.4vw;

    min-height: 0;

    position: relative;
  }
`

export const InformDetailContentsCol = styled.div`
  width: 50%;
  margin: 0rem auto;
  padding: 6rem 0rem;
  min-height: 70%;
  // overflow-y: auto;

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 83%;
  }
`

export const InformDetailTitleParagraph = styled.p`
  font-size: 1.9rem;
  font-weight: bold;
  color: #1e2f44;

  @media screen and (max-width: 500) {
    font-size: 6.6vw;
  }
`
export const InformDetailNotificationIconBox = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const InformDetailTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 5.5vw;

    display: block;
  }
`

export const InformDetailSubTitleRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    display: block;
  }
`

export const ImportantCheckBox = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 3rem;
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin-left: 1rem;
  ${(props: IIsImportant) =>
    props.isImportant
      ? `
      color: #1485ee;
      border: 1px solid #1485ee;
    `
      : `
      color: #808488;
      border: 1px solid #808488;
    `}

  @media screen and (max-width: 500px) {
    margin: 0;
    padding: 0;

    position: absolute;
    top: -8.3vw;

    width: 14.4vw;
    height: 5.5vw;

    font-size: 2.3vw;
  }
`

export const InformDetailDateIconBox = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const InformDetailDateContextParagraph = styled.p`
  margin-top: 0.4rem;
  font-size: 1rem;
  color: #808488;

  @media screen and (max-width: 500px) {
    font-size: 3.3vw;
  }
`

export const InformDetailContextParagraph = styled.p`
  margin-bottom: 2vw;

  width: 100%;
  min-height: 70%;
  white-space: pre-wrap;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75rem;
  color: #424344;

  @media screen and (max-width: 500px) {
    margin-bottom: 5.5vw;

    font-size: 3.6vw;
  }
`

export const InformDetailBackHyperlinkBox = styled.p`
  margin-top: 4rem;
  display: inline-block;
  padding: 1rem;
  color: #808488;
  border-radius: 10px;
  cursor: pointer;
  &:active {
    background-color: #f8fafd;
  }
`

export const AttachedfileLayout = styled.article`
  padding: 1vw 0 1.5vw 0;
  border-top: 1px solid #e7e9ed;
  border-bottom: 1px solid #e7e9ed;

  @media screen and (max-width: 500px) {
    padding: 5.2vw 0 6.9vw 0;
  }
`

export const AttachedfileTitle = styled.div`
  margin-bottom: 0.6vw;

  color: #808488;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    margin-bottom: 3vw;

    font-size: 2.7vw;
  }
`

export const AttachedfileBoxWrapper = styled.div`
  margin-left: 1vw;

  width: 100%;

  > :not(:last-child :first-child) {
    margin-bottom: 0.2vw;

    @media screen and (max-width: 500px) {
      margin-bottom: 2.7vw;
    }
  }
`

export const AttachedfileBox = styled.div`
  padding: 0 0.7vw;

  width: 97%;
  height: 2.2vw;

  border-radius: 0.7vw;
  border: 1px solid #e7e9ed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #424344;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    padding: 0 4.1vw;

    height: 9.7vw;

    border-radius: 2.7vw;

    font-size: 2.7vw;
  }
`

export const AttachedfileBoxText = styled.div`
  max-width: 44vw;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    max-width: 69vw;
  }
`

export const AttachedfileLeftSideBox = styled.div`
  display: flex;
  align-items: center;
`

export const FolderIcon = styled(folderIcon)`
  margin-right: 0.4vw;

  width: 0.8vw;
  height: 0.8vw;

  @media screen and (max-width: 500px) {
    margin-right: 2.2vw;

    width: 3.3vw;
    height: 3.3vw;
  }
`
