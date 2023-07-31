// import { useState } from "react"
import Input from "../common/Input"
import * as S from "./style"

const ResetPw = () => {
  // const [isEmailAuth, SetIsEmailAuth] = useState(true)
  const isEmailAuth = true

  return (
    <S.ResetPwLayout>
      <S.ContentBox>
        <S.DGSWLOGO />
        <S.EmailRow>
          <Input
            type="text"
            placeholder="이메일을 입력하세요"
            width={292}
            customStyle={{ height: "56px" }}
          />
          <S.AuthBtn>인증</S.AuthBtn>
        </S.EmailRow>
        {isEmailAuth && (
          <S.SuccessedEmailRow>
            <S.SuccessedEmailAuthIcon />
            <S.SuccessedEmailAuthParagraph>
              이메일 인증 완료
            </S.SuccessedEmailAuthParagraph>
          </S.SuccessedEmailRow>
        )}
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          width={390}
          customStyle={{ height: "56px", "margin-top": "18px" }}
        />
        <Input
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          width={390}
          customStyle={{ height: "56px", "margin-top": "18px" }}
        />
        <S.SubmitBtn>비밀번호 재설정 완료</S.SubmitBtn>
        <S.LoginLink href="/signin">로그인하기</S.LoginLink>
      </S.ContentBox>
    </S.ResetPwLayout>
  )
}

export default ResetPw
