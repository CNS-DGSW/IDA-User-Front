import styled from "styled-components"

export const MainComponentLayout = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 500px) {
    margin-top: 6.9vw;
    padding-bottom: 18.8vw;
  }
`

export const InformContentsCol = styled.div`
  width: 50%;
  margin: 0rem auto;
  padding: 6rem 0rem;
  min-height: 70%;
  overflow-y: auto;

  @media screen and (max-width: 500px) {
    margin-top: 1.3vw;
    padding: 0;

    width: 83vw;
  }
`

export const InformTitleParagraph = styled.p`
  font-size: 1.9rem;
  font-weight: bold;
  color: #1e2f44;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 500px) {
    margin-bottom: 7vw;

    font-size: 6.6vw;
  }
`
export const InformNotificationIconBox = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    display: none;
  }
`
