import useSignup from "@/hooks/signup/useSignup"
import * as S from "./style"
import Input from "../common/Input"
import { Button } from "../common/Button"
import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Checkbox from "../common/Checkbox"
import Link from "next/link"
import { validation } from "@/constants/validation"
import type { SignUpFormData } from "./type"
import ErrorMessage from "../common/ErrorMessage"
import { agreementInfo } from "@/constants/agreement"
import { useState } from "react"

const TimerSeconds: number = 180

const SignUp = () => {
  const [timer, setTimer] = useState<number>(TimerSeconds)

  const timerHandler = () => {
    setInterval(() => {
      if (timer >= 0) {
        setTimer((prev) => prev - 1)
      }
    }, 1000)
  }

  const {
    agreements,
    checkAllChecked,
    fullAgreement,
    handleChangeFullAgreement,
    handleCheckboxChange,
  } = useSignup()

  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<SignUpFormData>()

  const [contactAuth, setContactAuth] = useState<boolean>(false)
  const [isCheckContact, setIsCheckContact] = useState<boolean>(false)

  const agreement = register("agreement", {
    required: "약관을 동의하여 주세요.",
  })

  const onsubmit: SubmitHandler<SignUpFormData> = (data) => {
    console.log(data)
  }

  const contactOnSubmit = () => {
    const contact = getValues("contact")
    if (validation.contact.test(contact)) {
      setTimer(TimerSeconds)
      timerHandler()
      setContactAuth(true)
      setTimeout(() => {
        setContactAuth(false)
      }, TimerSeconds * 1000 + 500)
    }
  }

  const checkContactOnSubmit = () => {
    const contactCheck = getValues("contactCheck")
    if (contactCheck) {
      setIsCheckContact(true)
    }
  }

  return (
    <S.SignUpForm onSubmit={handleSubmit(onsubmit)}>
      <S.SignUpLayout>
        <Link href="/">
          <S.SignUpDGSWLogo />
        </Link>

        <S.SignUpEmailCertificationBox>
          <S.SignUpInputBox>
            <Controller
              control={control}
              rules={{
                required: "필수 항목입니다.",
                pattern: {
                  value: validation.contact,
                  message: "전화번호 형식이 올바르지 않습니다.",
                },
              }}
              name="contact"
              render={({ field }) => (
                <Input
                  type="text"
                  readOnly={contactAuth || isCheckContact}
                  placeholder="전화번호를 입력하세요"
                  width={294}
                  isError={!!errors.contact}
                  {...field}
                />
              )}
            />
            <S.SignUpErrorMessageLayout>
              <ErrorMessage>{errors.contact?.message}</ErrorMessage>
            </S.SignUpErrorMessageLayout>
          </S.SignUpInputBox>
          <Button
            type="button"
            radius={14}
            size="sm"
            onClick={contactOnSubmit}
            disabled={isCheckContact || contactAuth}
          >
            {isCheckContact
              ? "인증 완료"
              : contactAuth
              ? `${Math.floor(timer / 60)}:${
                  String(timer % 60).length < 2 ? `0${timer % 60}` : timer % 60
                }`
              : timer < 0
              ? "다시 인증"
              : "인증"}
          </Button>
        </S.SignUpEmailCertificationBox>
        <S.SignUpEmailCertificationBox>
          <S.SignUpInputBox>
            <Controller
              control={control}
              rules={{
                required: "필수 항목입니다.",
              }}
              name="contactCheck"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="인증번호를 입력하세요"
                  readOnly={isCheckContact}
                  width={294}
                  isError={!!errors.contactCheck}
                  {...field}
                />
              )}
            />
            <S.SignUpErrorMessageLayout>
              <ErrorMessage>{errors.contactCheck?.message}</ErrorMessage>
            </S.SignUpErrorMessageLayout>
          </S.SignUpInputBox>
          <Button
            type="button"
            radius={14}
            size="sm"
            onClick={checkContactOnSubmit}
            disabled={isCheckContact}
          >
            인증
          </Button>
        </S.SignUpEmailCertificationBox>

        <S.SignUpPasswordBox>
          <S.SignUpInputBox>
            <Controller
              control={control}
              rules={{
                required: "필수 항목입니다.",
                pattern: {
                  value: validation.password,
                  message: "8~16자 영문,숫자,특수문자를 사용하세요.",
                },
              }}
              name="password"
              render={({ field }) => (
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  width={390}
                  isError={!!errors.password}
                  {...field}
                />
              )}
            />

            {!errors.password?.message ? (
              <S.SignUpTypograpy>
                8~16자 영문 대 소문자,숫자,특수문자를 사용하세요.
              </S.SignUpTypograpy>
            ) : (
              <S.SignUpErrorMessageLayout>
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </S.SignUpErrorMessageLayout>
            )}
          </S.SignUpInputBox>
          <S.SignUpInputBox>
            <Controller
              control={control}
              rules={{
                required: "필수 항목 입니다.",
                validate: (value) => {
                  const password = getValues("password")
                  return password === value || "비밀번호가 일치하지 않습니다."
                },
              }}
              name="confirmPassword"
              render={({ field }) => (
                <Input
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  width={390}
                  isError={!!errors.confirmPassword}
                  {...field}
                />
              )}
            />
            <S.SignUpErrorMessageLayout>
              <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
            </S.SignUpErrorMessageLayout>
          </S.SignUpInputBox>
        </S.SignUpPasswordBox>

        <S.AgreementLayout>
          <S.FullAgreement>
            <Checkbox
              name={agreement.name}
              onBlur={agreement.onBlur}
              ref={agreement.ref}
              checked={fullAgreement}
              onChange={async (event) => {
                handleChangeFullAgreement()
                await agreement.onChange(event)
              }}
            />
            <S.AgreementCheckBoxLabel>전체 약관 동의</S.AgreementCheckBoxLabel>
            <S.SignUpErrorMessageLayout>
              <ErrorMessage>
                {!checkAllChecked() && errors.agreement?.message}
              </ErrorMessage>
            </S.SignUpErrorMessageLayout>
          </S.FullAgreement>

          <S.AgreementsContainer>
            {agreements.map(({ checked, id }, index) => (
              <S.AgreementBox key={index}>
                <Checkbox
                  name={`${index}`}
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                {agreementInfo[id]}
              </S.AgreementBox>
            ))}
          </S.AgreementsContainer>
        </S.AgreementLayout>
        <Button type="submit" size="lg" style={{ width: "390px" }} radius={14}>
          가입하기
        </Button>
        <Link href="/signin">로그인하기</Link>
      </S.SignUpLayout>
    </S.SignUpForm>
  )
}

export default SignUp
