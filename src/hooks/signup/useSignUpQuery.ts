import SignInRepositoryImpl from "@/apis/SignIn/signIn.repositoryImpl"
import type { SignUpPropsType } from "@/types/SignUp/signUp.type"
import { useRouter } from "next/router"
import { useMutation } from "react-query"

export const usePostSignInQuery = () => {
    const router = useRouter()
    return useMutation(
        async (
            postSignUpPropsData: SignUpPropsType,

        ) => await SignInRepositoryImpl.postSignIn(postSignUpPropsData),
        {
            onSuccess: async (res) => {
                alert("회원가입에 성공했습니다.")
                await router.push("/")
            }
        }
    )
}