import useSignup from "@/hooks/SignUp/useSignUp"
import * as S from "./style"
import Input from "../common/Input"
import Button from "../common/Button"
import { useForm, Controller } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Checkbox from "../common/Checkbox"
import Link from "next/link"
import { validation } from "@/constants/validation"
import type { SignUpFormData } from "./type"
import ErrorMessage from "../common/ErrorMessage"
import { agreementInfo } from "@/constants/agreement"
import { usePostSignUpQuery } from "@/hooks/SignUp/useSignUpQuery"

const SignUp = () => {
  const signUpMutation = usePostSignUpQuery()

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

  const agreement = register("agreement", {
    required: "약관을 동의하여 주세요.",
  })

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    signUpMutation.mutate({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
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
                  value: validation.email,
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
            {errors.email ? (
              <S.SignUpErrorMessageLayout>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </S.SignUpErrorMessageLayout>
            ) : (
              <S.MarginBtweenInput />
            )}
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
            {errors.confirmPassword ? (
              <S.SignUpErrorMessageLayout>
                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
              </S.SignUpErrorMessageLayout>
            ) : (
              <S.MarginBtweenInput />
            )}
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
                console.log(getValues("agreement"))
                await agreement.onChange(event)
                console.log(getValues("agreement"))
              }}
            />
            <S.AgreementCheckBoxLabel>전체 약관 동의</S.AgreementCheckBoxLabel>
          </S.FullAgreement>

          <S.SignUpErrorMessageLayout>
            <ErrorMessage>
              {!checkAllChecked() && errors.agreement?.message}
            </ErrorMessage>
          </S.SignUpErrorMessageLayout>

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
        <S.LoginLink href="/signin">로그인하기</S.LoginLink>
      </S.SignUpLayout>
    </S.SignUpForm>
  )
}

export default SignUp
