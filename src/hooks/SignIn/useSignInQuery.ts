import SignInrepositoryImpl from "@/apis/SignIn/SignIn.repositoryImpl"
import type { SignInPropsType, SignInResType } from "@/types/SignIn/signIn.type"
import { useMutation } from "react-query"
import type { UseMutationOptions } from "react-query"

export const usePostSignInQuery = () => {
    return useMutation(
        async(
            postPropsData: SignInPropsType,
            options? : Omit<
                UseMutationOptions<SignInResType, unknown, void, unknown>, 
                "mutationKey" | "mutationFn"
            >
        ) => await SignInrepositoryImpl.postSignIn(postPropsData),
        {
            onSuccess: (res) => {
                localStorage.setItem("accessToken",res.data.accessToken)
                localStorage.setItem("refreshToken",res.data.refreshToken)
            }
        }
    )
}
