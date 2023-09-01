// import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Input from "../common/Input"
import * as S from "./style"
import type { ChangePasswordFormData } from "./type"
import { validation } from "@/constants/validation"
import { useState } from "react"
import ErrorMessage from "../common/ErrorMessage"

const ChangePassword = () => {
  const [isEmailAuth, SetIsEmailAuth] = useState(true)

  const EmailAuthChange = () => {
    SetIsEmailAuth(!isEmailAuth)
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<ChangePasswordFormData>()

  const onsubmit: SubmitHandler<ChangePasswordFormData> = (data) => {
    console.log(data)
  }

  return (
    <S.ChangePasswordForm onSubmit={handleSubmit(onsubmit)}>
      <S.ChangePasswordLayout>
        <S.ContentBox>
          <S.DGSWLOGO />
          <S.EmailRow>
            <Controller
              control={control}
              name="email"
              rules={{
                required: "필수 항목입니다.",
                pattern: {
                  value: validation.email,
                  message: "이메일 형식이 올바르지 않습니다.",
                },
              }}
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  width={292}
                  customStyle={{ height: "56px", paddingLeft: "28px" }}
                  isError={!!errors.email}
                  {...field}
                />
              )}
            />
            <S.EmailAuthBtn onClick={EmailAuthChange} type="button">
              인증
            </S.EmailAuthBtn>
          </S.EmailRow>
          <S.ChangePasswordErrorMEssageLayout>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </S.ChangePasswordErrorMEssageLayout>
          {isEmailAuth && (
            <S.SuccessedEmailRow>
              <S.SuccessedEmailAuthIcon />
              <S.SuccessedEmailAuthParagraph>
                이메일 인증 완료
              </S.SuccessedEmailAuthParagraph>
            </S.SuccessedEmailRow>
          )}
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
                customStyle={{
                  height: "56px",
                  "margin-top": "18px",
                  paddingLeft: "28px",
                }}
                isError={!!errors.password}
                {...field}
              />
            )}
          />
          <S.ChangePasswordErrorMEssageLayout>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </S.ChangePasswordErrorMEssageLayout>
          <Controller
            control={control}
            rules={{
              required: "필수 항목입니다.",
              validate: (value) =>
                value === getValues("password") ||
                "비밀번호가 일치하지 않습니다.",
            }}
            name="passwordRepeat"
            render={({ field }) => (
              <Input
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                width={390}
                customStyle={{
                  height: "56px",
                  "margin-top": "18px",
                  paddingLeft: "28px",
                }}
                isError={!!errors.passwordRepeat}
                {...field}
              />
            )}
          />
          <S.ChangePasswordErrorMEssageLayout>
            <ErrorMessage>{errors.passwordRepeat?.message}</ErrorMessage>
          </S.ChangePasswordErrorMEssageLayout>
          <S.SubmitBtn type="submit">비밀번호 재설정 완료</S.SubmitBtn>
          <S.LoginLink href="/signin">로그인하기</S.LoginLink>
        </S.ContentBox>
      </S.ChangePasswordLayout>
    </S.ChangePasswordForm>
  )
}

export default ChangePassword
