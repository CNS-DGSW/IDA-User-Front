import styled from "styled-components"
import DGSW_LOGO from "@/assets/img/DGSW_LOGO.svg"

export const ChangePasswordLayout = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 390px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const SignUpForm = styled.form``

export const SignUpDGSWLogo = styled(DGSW_LOGO)`
  fill: ${({ theme: { colors } }) => colors.blue400};
  width: 213px;
  margin-bottom: 20px;
`

export const SignUpInputBox = styled.div`
  position: relative;
`

export const SignUpErrorMessageLayout = styled.div`
  position: absolute;
  bottom: -30px;
  left: 20px;
`

export const SignUpEmailCertificationBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SignUpPasswordBox = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SignUpTypograpy = styled.p`
  position: absolute;
  bottom: -30px;
  left: 20px;

  color: ${({ theme: { colors } }) => colors.gray500};
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 500;
`
export const AgreementLayout = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 173px;
`

export const FullAgreement = styled.div`
  position: relative;
  width: 390px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f8fafd;
  padding-left: 18px;
`

export const AgreementsContainer = styled.div`
  width: 390px;
  gap: 50px;
  margin-top: 19px;
  padding-left: 18px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`
export const AgreementBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const AgreementCheckBoxLabel = styled.label`
  color: ${({ theme: { colors } }) => colors.gray800};
  margin-left: 14px;
`
