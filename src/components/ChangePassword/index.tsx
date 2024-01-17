// import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import Input from "../common/Input"
import * as S from "./style"
import type { ChangePasswordFormData } from "./type"
import { validation } from "@/constants/validation"
import { useState } from "react"
import ErrorMessage from "../common/ErrorMessage"
import Button from "../common/Button"

const ChangePassword = () => {
  const [isEmailAuth, SetIsEmailAuth] = useState(false)

  // const EmailAuthChange = () => {
  //   SetIsEmailAuth(!isEmailAuth)
  // }

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
                  width={294}
                  // customStyle={{ height: "56px", paddingLeft: "28px" }}
                  isError={!!errors.email}
                  {...field}
                />
              )}
            />
            <Button type="button" radius={14} size="sm">
              인증
            </Button>
          </S.EmailRow>
          {errors.email ? (
            <S.ChangePasswordErrorMessageLayout>
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </S.ChangePasswordErrorMessageLayout>
          ) : (
            <S.MarginBtweenInput />
          )}
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
                customStyle={
                  {
                    // height: "56px",
                    // "margin-top": "18px",
                    // paddingLeft: "28px",
                  }
                }
                isError={!!errors.password}
                {...field}
              />
            )}
          />
          {errors.password ? (
            <S.ChangePasswordErrorMessageLayout>
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </S.ChangePasswordErrorMessageLayout>
          ) : (
            <S.MarginBtweenInput />
          )}
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
                customStyle={
                  {
                    // height: "56px",
                    // "margin-top": "18px",
                    // paddingLeft: "28px",
                  }
                }
                isError={!!errors.passwordRepeat}
                {...field}
              />
            )}
          />
          {errors.passwordRepeat ? (
            <S.ChangePasswordErrorMessageLayout>
              <ErrorMessage>{errors.passwordRepeat?.message}</ErrorMessage>
            </S.ChangePasswordErrorMessageLayout>
          ) : (
            <S.MarginBtweenInput />
          )}
          <Button
            type="submit"
            size="lg"
            style={{ width: "390px" }}
            radius={14}
          >
            비밀번호 재설정 완료
          </Button>
          <S.LoginLink href="/signin">로그인하기</S.LoginLink>
        </S.ContentBox>
      </S.ChangePasswordLayout>
    </S.ChangePasswordForm>
  )
}

export default ChangePassword
