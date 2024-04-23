import type { SignUpPropsType } from "@/types/SignUp/signUp.type"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

class SignUprepositoryImpl implements SignUprepositoryImpl {
  public async postSignUp(postSignUpPropsData: SignUpPropsType): Promise<void> {
    return await IDAcustomAxios.post("/member/signUp", postSignUpPropsData)
  }
}

export default new SignUprepositoryImpl()
