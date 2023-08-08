import styled from "styled-components"
import DGSW_LOGO from "@/assets/img/DGSW_LOGO.svg"

export const SignUpLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 390px;
  height: 680px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const SignUpDGSWLogo = styled(DGSW_LOGO)`
  fill: ${({ theme: { colors } }) => colors.blue400};
  width: 213px;
  flex-shrink: 0;
`

export const SignUpEmailCertificationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const SignUpTypograpy = styled.p`
  color: ${({ theme: { colors } }) => colors.gray500};
  margin-left: 20px;
  font-size: 13px;
  font-family: Pretendard;
  font-weight: 500;
  letter-spacing: -0.52px;
`

export const SIgnUpPasswordBox = styled.div`
  height: 156px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AgreementLayout = styled.div`
  width: 390px;
  height: 173px;
  flex-shrink: 0;
`

export const FullAgreement = styled.div`
  width: 390px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f8fafd;
  padding-left: 18px;
`
export const AgreementContainer = styled.div`
  margin-top: 19px;
  width: 390px;
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
