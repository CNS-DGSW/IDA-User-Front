import { useState } from "react"
import type { ChangeEvent } from "react"
import * as S from "./style"
import Input from "../common/Input"
import { Button } from "../common/Button"
import Checkbox from "../common/Checkbox"
import Link from "next/link"

const SignUp = () => {
  const [fullAgreement, setFullAgreement] = useState(false)
  const [agreements, setAgreements] = useState([
    {
      title: "[필수] 개인정보 처리 및 개인정보활영 동의",
      checked: false,
    },
    {
      title: "[필수] 입학원서 접수 사이트 이용약관 동의",
      checked: false,
    },
    { title: "[필수] 바탕 개인정보 취급방침 동의", checked: false },
  ])

  const handleCheckboxChange = ({
    target: { name },
  }: ChangeEvent<HTMLInputElement>) => {
    setAgreements((prev) => {
      const newData = prev.map((agreement, index) => {
        const { title, checked } = agreement
        return Number(name) === index ? { title, checked: !checked } : agreement
      })
      return newData
    })
  }

  const handleChangeFullAgreement = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setFullAgreement(checked)
    if (!fullAgreement) {
      setAgreements((prev) =>
        prev.map((item) => {
          return { ...item, checked: true }
        }),
      )
    } else {
      setAgreements((prev) =>
        prev.map((item) => {
          return { ...item, checked: false }
        }),
      )
    }
  }

  const isAllCheckd = () => {
    return (
      agreements[0].checked && agreements[1].checked && agreements[2].checked
    )
  }

  return (
    <S.SignUpLayout>
      <Link href={"/"}>
        <S.SignUpDGSWLogo />
      </Link>

      <S.SignUpEmailCertificationBox>
        <Input width={294} type="text" placeholder="이메일을 입력하세요" />
        <Button radius={14} size="sm">
          인증
        </Button>
      </S.SignUpEmailCertificationBox>

      <S.SIgnUpPasswordBox>
        <Input width={390} type="text" placeholder="비밀번호를 입력하세요" />
        <S.SignUpTypograpy>
          8~16자 영문 대 소문자,숫자,특수문자를 사용하세요.
        </S.SignUpTypograpy>
        <Input
          width={390}
          type="text"
          placeholder="비밀번호를 다시 입력하세요"
        />
      </S.SIgnUpPasswordBox>

      <S.AgreementLayout>
        <S.FullAgreement>
          <S.AgreementCheckBoxLabel>
            <Checkbox
              checked={isAllCheckd() && fullAgreement}
              onChange={handleChangeFullAgreement}
            />
          </S.AgreementCheckBoxLabel>
          전체 약관 동의
        </S.FullAgreement>

        <S.AgreementContainer>
          {agreements.map(({ checked, title }, index) => (
            <S.AgreementBox key={index}>
              <S.AgreementCheckBoxLabel>
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  name={`${index}`}
                />
              </S.AgreementCheckBoxLabel>
              {title}
            </S.AgreementBox>
          ))}
        </S.AgreementContainer>
      </S.AgreementLayout>
      <Button size="lg" style={{ width: "390px" }} radius={14}>
        가입하기
      </Button>
      <Link href={"#"}>로그인하기</Link>
    </S.SignUpLayout>
  )
}

export default SignUp
