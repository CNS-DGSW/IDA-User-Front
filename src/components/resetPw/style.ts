import styled from "styled-components"
import DGSW from "@/assets/DGSWBlue.svg"
import Link from "next/link"
import SuccessedEmailAuth from "@/assets/SuccessedEmailAuthIcon.svg"

export const ResetPwLayout = styled.div`
`

export const ContentBox = styled.div`
    margin: auto;
    padding-top: 18vh;

    width: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const DGSWLOGO = styled(DGSW)``

export const SuccessedEmailRow = styled.div`
    margin: 12px 0 -2px 25px;

    width: 100%;
    display: flex;
    align-items: center;
`

export const SuccessedEmailAuthParagraph = styled.p`
    margin-left: 4px;

    color: #0ECB4E;
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
`

export const AuthBtn = styled.button`
    width: 86px;
    height: 56px;

    border: none;
    border-radius: 14px;
    background: #1485EE;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFF;
    font-size: 18px;
    font-weight: 500;
`

export const SubmitBtn = styled.button`
    margin-top: 28px;

    width: 100%;
    height: 56px;

    border: none;
    border-radius: 14px;
    background: #1485EE;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFF;
    font-size: 20px;
    font-weight: 700;
`

export const LoginLink = styled(Link)`
    margin-top: 32px;

    color: #424344;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.64px;
`

