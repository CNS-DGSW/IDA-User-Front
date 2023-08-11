import useSignup from "@/hooks/signup/useSignup"
import * as S from "./style"
import Input from "../common/Input"
import { Button } from "../common/Button"
import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Checkbox from "../common/Checkbox"
import Link from "next/link"

interface FormData {
  email: string
  password: string
  confirmPassword: string
  agreement: boolean
}

const SignUp = () => {
  const {
    agreements,
    isAllCheckd,
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
  } = useForm<FormData>()

  const agreement = register("agreement", {
    required: "약관을 동의하여 주세요.",
  })

  const onsubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  return (
    <S.SignUpForm onSubmit={handleSubmit(onsubmit)}>
      <S.SignUpLayout>
        <Link href={"/"}>
          <S.SignUpDGSWLogo />
        </Link>

        <S.SignUpEmailCertificationBox>
          <S.SignUpInputBox>
            <Controller
              control={control}
              rules={{
                required: "필수 항목입니다.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              }}
              name="email"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  width={294}
                  isError={!!errors.email}
                  {...field}
                />
              )}
            />
            <S.SignUpErrorMessage>{errors.email?.message}</S.SignUpErrorMessage>
          </S.SignUpInputBox>
          <Button type="button" radius={14} size="sm">
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
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
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
              <S.SignUpErrorMessage>
                {errors.password?.message}
              </S.SignUpErrorMessage>
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
            <S.SignUpErrorMessage>
              {errors.confirmPassword?.message}
            </S.SignUpErrorMessage>
          </S.SignUpInputBox>
        </S.SignUpPasswordBox>

        <S.AgreementLayout>
          <S.FullAgreement>
            <S.AgreementCheckBoxLabel>
              <Checkbox
                name={agreement.name}
                onBlur={agreement.onBlur}
                ref={agreement.ref}
                checked={fullAgreement}
                onChange={(event) => {
                  handleChangeFullAgreement(event)
                  agreement.onChange(event)
                }}
              />
            </S.AgreementCheckBoxLabel>
            전체 약관 동의
            <S.SignUpErrorMessage>
              {!isAllCheckd() && errors.agreement?.message}
            </S.SignUpErrorMessage>
          </S.FullAgreement>

          <S.AgreementsContainer>
            {agreements.map(({ checked, title }, index) => (
              <S.AgreementBox key={index}>
                <S.AgreementCheckBoxLabel>
                  <Checkbox
                    name={`${index}`}
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                </S.AgreementCheckBoxLabel>
                {title}
              </S.AgreementBox>
            ))}
          </S.AgreementsContainer>
        </S.AgreementLayout>
        <Button type="submit" size="lg" style={{ width: "390px" }} radius={14}>
          가입하기
        </Button>
        <Link href={"#"}>로그인하기</Link>
      </S.SignUpLayout>
    </S.SignUpForm>
  )
}

export default SignUp
