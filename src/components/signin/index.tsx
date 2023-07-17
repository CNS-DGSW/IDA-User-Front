
import * as S from "./style"
import DGSWLOGO from "@/assets/DGSWBlue.svg"

const Signin = () => {
  // const [email,setEmail] = useState("이메일을 입력하세요")

  return (
    <S.SigninLayout>
      <S.ContentBox>
        <DGSWLOGO />
        <S.ValueInput placeholder="이메일을 입력하세요" />
        <S.ValueInput placeholder="비밀번호를 입력하세요" />
        <S.SubmitBtn>가입하기</S.SubmitBtn>
        <S.NavigateRow>
          <S.NavigateBtn href="/">비밀번호 찾기</S.NavigateBtn>|
          <S.NavigateBtn href="/signup">회원가입</S.NavigateBtn>
        </S.NavigateRow>
      </S.ContentBox>
    </S.SigninLayout>
  )
}

export default Signin
