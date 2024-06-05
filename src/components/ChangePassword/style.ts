import styled from "styled-components"
import DGSW from "@/assets/Img/Logo/dgswBlue.svg"
import Link from "next/link"
import SuccessedEmailAuth from "@/assets/Img/Icon/successedEmailAuthIcon.svg"

export const ChangePasswordForm = styled.form``

export const ChangePasswordLayout = styled.div`
  input {
    padding-left: 1.4vw;
    border-radius: 0.7vw;
  }

  @media screen and (max-width: 500px) {
    margin: 11.9vw auto 0 auto;
    padding-bottom: 16vw;

    width: 83vw;

    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      padding-left: 5.8vw;
      border-radius: 3.8vw;
    }
  }
`

export const ContentBox = styled.div`
  margin: auto;
  padding-top: 5.8vw;

  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin-top: 0.5vw;
    font-size: 1vw;
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    padding: 0;

    width: 83vw;

    > button {
      width: 83vw !important;
      font-size: 4.1vw;
    }
  }
`

export const DGSWLOGO = styled(DGSW)`
  width: 213px;

  @media screen and (max-width: 500px) {
    margin-bottom: 11.9vw;

    width: 36.3vw;
  }
`

export const SuccessedEmailRow = styled.div`
  margin: 0.5vw 0 0.7vw 1.2vw;

  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin: 2.5vw 0 3.3vw 3.6vw;
  }
`

export const SuccessedEmailAuthParagraph = styled.p`
  margin-left: 4px;

  color: #0ecb4e;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.52px;
`

export const SuccessedEmailAuthIcon = styled(SuccessedEmailAuth)``

export const EmailRow = styled.div`
  margin-top: 80px;

  width: 100%;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`

export const ChangePasswordErrorMessageLayout = styled.div`
  margin-top: 0.6vw;
  margin-left: 1.4vw;
  margin-bottom: 0.8vw;

  width: 100%;

  @media screen and (max-width: 500px) {
    margin-top: 2.5vw;
    margin-left: 4.1vw;
    margin-bottom: 3.3vw;
  }
`

export const MarginBtweenInput = styled.div`
  margin-top: 0.9vw;

  @media screen and (max-width: 500px) {
    margin-top: 3.6vw;
  }
`

export const LoginLink = styled(Link)`
  margin-top: 32px;

  color: #424344;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.64px;

  @media screen and (max-width: 500px) {
    margin-top: 7.2vw;
  }
`
