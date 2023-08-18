import styled from "styled-components"

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
  overflow-y: auto;
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
  background-color: skyblue;
`

export const InformDetailTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`

export const InformDetailSubTitleRow = styled.div`
  display: flex;
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
  background-color: gray;
  margin-right: 0.5rem;
`
export const InformDetailDateContextParagraph = styled.p`
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
