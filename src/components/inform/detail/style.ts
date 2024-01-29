import styled from "styled-components"
import cancleIcon from "@/assets/img/Icon/cancleIcon.svg"
import folderIcon from "@/assets/img/Icon/folderIcon.svg"

interface IIsImportant {
  isImportant: boolean
}
export const MainComponentLayout = styled.div`
  width: 100%;
  min-height: 70vh;
`

export const InformDetailContentsCol = styled.div`
  width: 50%;
  margin: 0rem auto;
  padding: 6rem 0rem;
  min-height: 70%;
  // overflow-y: auto;
`

export const InformDetailTitleParagraph = styled.p`
  font-size: 1.9rem;
  font-weight: bold;
  color: #1e2f44;
`
export const InformDetailNotificationIconBox = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
`

export const InformDetailTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`

export const InformDetailSubTitleRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`

export const InformDetailDateIconBox = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`
export const InformDetailDateContextParagraph = styled.p`
  margin-top: 0.4rem;
  font-size: 1rem;
  color: #808488;
`

export const InformDetailContextParagraph = styled.p`
  width: 100%;
  min-height: 70%;
  white-space: pre-wrap;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75rem;
  color: #424344;
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

export const AttachedfileLayout = styled.div`
  padding: 1vw 0 1.5vw 0;
  border-bottom: 1px solid #e7e9ed;
`

export const AttachedfileTitle = styled.div`
  margin-bottom: 0.6vw;

  color: #808488;
  font-family: Pretendard;
  font-size: 0.7vw;
  font-weight: 500;
`

export const AttachedfileBoxWrapper = styled.div`
  margin-left: 1vw;

  width: 100%;

  > :not(:last-child :first-child) {
    margin-bottom: 0.2vw;
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
`

export const AttachedfileBoxText = styled.div`
  max-width: 44vw;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const AttachedfileLeftSideBox = styled.div`
  display: flex;
  align-items: center;
`

export const FolderIcon = styled(folderIcon)`
  margin-right: 0.4vw;

  width: 0.8vw;
  height: 0.8vw;
`

export const CancleIcon = styled(cancleIcon)`
  width: 1vw;
  height: 1vw;
  cursor: pointer;
`
