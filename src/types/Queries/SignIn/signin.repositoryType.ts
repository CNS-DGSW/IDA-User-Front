import type { SignInPropsType, SignInResType } from "@/types/SignIn/signIn.type"

export interface SignInrepositoryType {
  postSignIn: (postPropsData: SignInPropsType) => Promise<SignInResType>
}

export type postSignInType = () => Promise<SignInResType>
