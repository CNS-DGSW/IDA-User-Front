import signUpRepositoryImpl from "@/apis/SignUp/signUp.repositoryImpl"
import type { SignUpPropsType } from "@/types/SignUp/signUp.type"
import { useRouter } from "next/router"
import { useMutation } from "react-query"

export const usePostSignUpQuery = () => {
  const router = useRouter()
  return useMutation(
    async (postSignUpPropsData: SignUpPropsType) =>
      await signUpRepositoryImpl.postSignUp(postSignUpPropsData),
    {
      onSuccess: async (res) => {
        alert("회원가입에 성공했습니다.")
        await router.push("/")
      },
    },
  )
}
