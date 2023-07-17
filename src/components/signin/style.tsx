import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const SigninLayout = styled.div`
  display: flex;
  justify-content: center;
`

export const ContentBox = styled.div``

export const LogoImg = styled(Image)`
  /* width: 213px;
    height: 48px; */
`

export const ValueInput = styled.input`
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
  width: 390px;
  height: 56px;
`

export const NavigateRow = styled.div``

export const NavigateBtn = styled(Link)``
