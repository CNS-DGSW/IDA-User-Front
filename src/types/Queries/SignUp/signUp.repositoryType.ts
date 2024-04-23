import type { SignUpPropsType } from "@/types/SignUp/signUp.type"

export interface SignUprepositoryType {
  postSignUp: (postPropsData: SignUpPropsType) => void
}
