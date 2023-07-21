import styled from "styled-components"

interface ILayoutProps {
  isHover: boolean
}

interface IIsImportant {
  isImportant: boolean
  isHover: boolean
}

export const MainComponentLayout = styled.div`
  width: 100%;
  border-bottom: 1px solid #e7e9ed;
  transition: 0.3s;
  background-color: ${(props: ILayoutProps) =>
    props.isHover ? `rgba(231,233,237,0.5)` : `white`};
`
export const SubComponentLayout = styled.div`
  padding: 3%;
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentsRow = styled.div`
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
  ${(props: IIsImportant) =>
    props.isImportant
      ? props.isHover
        ? `
      color: white;
      background-color: #1485ee;
      border: 1px solid #1485ee;
    `
        : `
      color: #1485ee;
      border: 1px solid #1485ee;
    `
      : props.isHover
      ? `
      color: white;
      background-color: #808488;
      border: 1px solid #808488;
    `
      : `
      color: #808488;
      border: 1px solid #808488;
    `}
`

export const InformContentsTitleParagraph = styled.p`
  color: #424344;
  font-size: 1.125rem;
  margin-left: 1.125rem;
`

export const InformContentsDateIconBox = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: gray;
  margin-right: 0.5rem;
`
export const InformContentsDateContextParagraph = styled.p`
  font-size: 1rem;
  color: #808488;
`
