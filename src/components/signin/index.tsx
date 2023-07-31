import Input from "../common/Input"
import * as S from "./style"

const Signin = () => {
  // const [email,setEmail] = useState("이메일을 입력하세요")

  return (
    <S.SigninLayout>
      <S.DGSWLOGO />
      <Input
        placeholder="이메일을 입력하세요"
        type="text"
        width={390}
        customStyle={{ height: "56px", "margin-bottom": "18px" }}
      />
      <Input
        placeholder="비밀번호를 입력하세요"
        type="password"
        width={390}
        customStyle={{ height: "56px" }}
      />
      <S.SubmitBtn>가입하기</S.SubmitBtn>
      <S.NavigateList>
        <S.NavigateLink href="/resetPw">비밀번호 찾기</S.NavigateLink>
        <S.NavigateItem>|</S.NavigateItem>
        <S.NavigateLink href="/signup">회원가입</S.NavigateLink>
      </S.NavigateList>
    </S.SigninLayout>
  )
}

export default Signin
