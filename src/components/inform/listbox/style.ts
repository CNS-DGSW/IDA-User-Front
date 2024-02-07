import styled from "styled-components"

interface IIsImportant {
  isImportant: boolean
}

export const MainComponentLayout = styled.div`
  width: 100%;
  border-bottom: 1px solid #e7e9ed;
  transition: 0.3s;

  @media screen and (max-width: 500px) {
    height: 17.5vw;

    display: flex;
    align-items: center;
  }
`

export const SubComponentLayout = styled.div`
  padding: 3%;
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 100%;

    align-items: normal;
  }
`

export const ContentsRow = styled.div<{ isNotAppearInMobile: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 100%;

    ${({ isNotAppearInMobile }) => isNotAppearInMobile && "display: none;"}
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
    padding: 0;
    width: 17.2vw;
    height: 6.6vw;

    font-size: 2.7vw;
  }
`

export const InformContentsTitleParagraph = styled.p`
  color: #424344;
  font-size: 1.125rem;
  margin-left: 1.125rem;

  @media screen and (max-width: 500px) {
    margin-left: 0.9rem;

    width: 73%;
    font-size: 4.1vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const InformContentsDateIconBox = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
`
export const InformContentsDateContextParagraph = styled.p`
  font-size: 1rem;
  color: #808488;
`
