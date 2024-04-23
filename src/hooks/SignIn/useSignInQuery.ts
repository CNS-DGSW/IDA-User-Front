import SignInrepositoryImpl from "@/apis/SignIn/signIn.repositoryImpl"
import type { SignInPropsType } from "@/types/SignIn/signIn.type"
import { useRouter } from "next/router"
import { useMutation } from "react-query"

export const usePostSignInQuery = () => {
  const router = useRouter()
  return useMutation(
    async (postSignInPropsData: SignInPropsType) =>
      await SignInrepositoryImpl.postSignIn(postSignInPropsData),
    {
      onSuccess: async (res) => {
        localStorage.setItem("accessToken", res.data.accessToken)
        localStorage.setItem("refreshToken", res.data.refreshToken)
        alert("로그인에 성공했습니다.")
        await router.push("/")
      },
    },
  )
}
