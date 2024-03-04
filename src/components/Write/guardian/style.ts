import styled from "styled-components"

export const GuardianSection = styled.section``

export const DaumPopUpWrapper = styled.div`
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CalanderImgBox = styled.div`
  position: absolute;
  right: 18px;

  @media screen and (max-width: 500px) {
    right: 5%;
    top: 58%;
  }
`
