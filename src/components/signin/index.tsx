import { Controller, SubmitHandler, useForm } from "react-hook-form"
import Input from "../common/Input"
import * as S from "./style"
import type { SignInFormData } from "./type"
import { validation } from "@/constants/validation"
import ErrorMessage from "../common/ErrorMessage"

const Signin = () => {
  // const [email,setEmail] = useState("이메일을 입력하세요")

  const { 
    control, 
    handleSubmit,
    formState:{errors}
  } = useForm<SignInFormData>()

  const onsubmit: SubmitHandler<SignInFormData> = (data) =>{
    console.log(data)
  }

  return (
    <S.SigninForm onSubmit={handleSubmit(onsubmit)}>
      <S.SigninLayout>
        <S.DGSWLOGO />
        <Controller
          control={control}
          rules={{
            required: "필수 항목입니다.",
            pattern:{
              value: validation.email,
              message : "이메일 형식이 올바르지 않습니다."
            }
          }}
          name="email"
          render={({field})=>(
            <Input
              placeholder="이메일을 입력하세요"
              type="text"
              width={390}
              customStyle={{ height: "56px", marginBottom: "18px", paddingLeft: "28px" }}
              isError={!!errors.email}
              {...field}
            />
          )}
        />
        {
          errors.email &&
          <S.SigninErrorMessageLayout>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </S.SigninErrorMessageLayout>
        }
        <Controller
          control={control}
          rules={{
            required: "필수 항목입니다.",
          }}
          name="password"
          render={({field})=>(
            <Input
              placeholder="비밀번호를 입력하세요"
              type="password"
              width={390}
              customStyle={{ height: "56px", marginBottom: "18px", paddingLeft: "28px" }}
            />
          )}
        />
        {
          errors.password &&
          <S.SigninErrorMessageLayout>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </S.SigninErrorMessageLayout>
        }
        <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>
        <S.NavigateList>
          <S.NavigateLink href="/changepassword">비밀번호 찾기</S.NavigateLink>
          <S.NavigateItem>|</S.NavigateItem>
          <S.NavigateLink href="/signup">회원가입</S.NavigateLink>
        </S.NavigateList>
      </S.SigninLayout>
    </S.SigninForm>
  )
}

export default Signin
