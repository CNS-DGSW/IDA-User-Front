import type { SignInPropsType, SignInResType } from "@/types/SignIn/signIn.type"

export interface SignInrepositoryType {
  postSignIn: (postSignInPropsData: SignInPropsType) => Promise<SignInResType>
}
