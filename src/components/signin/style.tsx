import Link from "next/link"
import styled from "styled-components"
import DGSW from "@/assets/DGSWBlue.svg"

export const SigninForm = styled.form``

export const SigninLayout = styled.div`
  margin-top: 18vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DGSWLOGO = styled(DGSW)`
  margin-bottom: 80px;
`

export const SigninErrorMessageLayout = styled.div`
  margin-top: -6px;
  margin-left: 26px;
  margin-bottom: 12px;

  width: 390px;
`

export const StyledInput = styled.input`
  background-color: pink;
`

export const ValueInput = styled.input`
  margin-bottom: 18px;

  width: 24.3rem;
  height: 3.5rem;

  border-radius: 0.8rem;
  border: 1px solid #e7e9ed;

  ::placeholder {
    color: #8b939c;
    font-family: "Pretendard";
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.04rem;
  }
`

export const SubmitBtn = styled.button`
  margin-top: 10px;

  width: 390px;
  height: 56px;

  border: none;
  border-radius: 14px;
  background: #1485ee;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
`

export const NavigateList = styled.ul`
  margin-top: 35px;

  display: flex;
  justify-content: center;

  color: #424344;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.64px;
`

export const NavigateLink = styled(Link)``

export const NavigateItem = styled.li`
  margin: 0 13px;
`
