import SignInrepositoryImpl from "@/apis/SignIn/SignIn.repositoryImpl"
import type { SignInPropsType, SignInResType } from "@/types/SignIn/signIn.type"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import type { UseMutationOptions } from "react-query"

export const usePostSignInQuery = () => {
  const router = useRouter()
  return useMutation(
    async (
      postPropsData: SignInPropsType,
      options?: Omit<
        UseMutationOptions<SignInResType, unknown, void, unknown>,
        "mutationKey" | "mutationFn"
      >,
    ) => await SignInrepositoryImpl.postSignIn(postPropsData),
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
