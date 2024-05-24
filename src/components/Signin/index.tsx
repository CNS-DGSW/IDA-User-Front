import type { SubmitHandler } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"
import Input from "../common/Input"
import * as S from "./style"
import type { SignInFormData } from "./type"
import { validation } from "@/constants/validation"
import ErrorMessage from "../common/ErrorMessage"
import Link from "next/link"
import { usePostSignInQuery } from "@/hooks/SignIn/useSignInQuery"

const Signin = () => {
  const signInMutation = usePostSignInQuery()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>()

  const onsubmit: SubmitHandler<SignInFormData> = (data) => {
    signInMutation.mutate({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <S.SigninForm onSubmit={handleSubmit(onsubmit)}>
      <S.SigninLayout>
        <Link href="/">
          <S.DGSWLOGO />
        </Link>
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
              placeholder="이메일을 입력하세요"
              type="text"
              width={390}
              customStyle={{
                height: "3.5rem",
                marginBottom: "1.125rem",
              }}
              isError={!!errors.email}
              {...field}
            />
          )}
        />
        {errors.email && (
          <S.SigninErrorMessageLayout>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </S.SigninErrorMessageLayout>
        )}

        <Controller
          control={control}
          rules={{
            required: "필수 항목입니다.",
          }}
          name="password"
          render={({ field }) => (
            <Input
              placeholder="비밀번호를 입력하세요"
              type="password"
              width={390}
              customStyle={{
                height: "3.5rem",
                marginBottom: "1.125rem",
              }}
              isError={!!errors.password}
              {...field}
            />
          )}
        />
        {errors.password && (
          <S.SigninErrorMessageLayout>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </S.SigninErrorMessageLayout>
        )}
        <S.SubmitBtn type="submit">로그인하기</S.SubmitBtn>
        <S.NavigateList>
          <S.NavigateLink href="/changePassword">비밀번호 찾기</S.NavigateLink>
          <S.NavigateItem>|</S.NavigateItem>
          <S.NavigateLink href="/signup">회원가입</S.NavigateLink>
        </S.NavigateList>
      </S.SigninLayout>
    </S.SigninForm>
  )
}

export default Signin
