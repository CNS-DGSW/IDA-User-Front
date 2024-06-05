import styled from "styled-components"
import DGSWblueLogo from "@/assets/Img/Logo/dgswBlue.svg"
import Link from "next/link"

export const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;

  > button {
    font-size: 1vw;
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    margin: calc(11.9vw - 20px) auto 16vw auto;
    justify-content: start;
    width: 83vw;
    height: auto;

    > button {
      width: 83vw !important;
      font-size: 4.1vw;
    }
  }
`

export const SignUpForm = styled.form`
  height: calc(100vh - 1rem - 3rem - 1rem);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: auto;
  }
`

export const SignUpDGSWLogo = styled(DGSWblueLogo)`
  fill: ${({ theme: { colors } }) => colors.blue400};
  width: 213px;
  margin-bottom: 4.1vw;

  @media screen and (max-width: 500px) {
    margin-bottom: 12.2vw;

    width: 36.3vw;
  }
`

export const SignUpInputBox = styled.div`
  > input {
    padding-left: 1.4vw;
    border-radius: 0.7vw;
  }

  @media screen and (max-width: 500px) {
    input {
      padding-left: 5.8vw;
      border-radius: 3.8vw;
    }
  }
`

export const SignUpErrorMessageLayout = styled.div`
  margin-top: 0.6vw;
  margin-left: 1.4vw;
  margin-bottom: 0.8vw;

  @media screen and (max-width: 500px) {
    position: static;

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

export const SignUpEmailCertificationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SignUpPasswordBox = styled.div`
  @media screen and (max-width: 500px) {
    height: auto;

    justify-content: start;
  }
`

export const SignUpTypograpy = styled.p`
  margin-top: 0.6vw;
  margin-left: 1.4vw;
  margin-bottom: 0.8vw;

  color: ${({ theme: { colors } }) => colors.gray500};
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    position: static;

    margin-top: 2.5vw;
    margin-left: 4.1vw;
    margin-bottom: 3.3vw;
  }
`

export const AgreementLayout = styled.div`
  margin-bottom: 1.5vw;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin-bottom: 5.8vw;

    width: 100%;
    height: auto;

    gap: 0;
  }
`

export const FullAgreement = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f8fafd;
  padding-left: 18px;

  @media screen and (max-width: 500px) {
    width: 83vw;
  }
`

export const AgreementsContainer = styled.div`
  width: 100%;
  padding-left: 18px;
  gap: 1vw;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    margin-top: 0;
    font-size: 3.3vw;
    gap: 4vw;
  }
`

export const AgreementBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const AgreementCheckBoxLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.gray800};
  margin-left: 14px;

  @media screen and (max-width: 500px) {
    font-size: 3.3vw;
  }
`

export const LoginLink = styled(Link)`
  margin-top: 1.6vw;
  color: #424344;

  @media screen and (max-width: 500px) {
    margin-top: 7.2vw;
    font-size: 3.3vw;
  }
`
