import type { SignUprepositoryType } from "@/types/Queries/SignUp/signUp.repositoryType"
import type { SignUpPropsType } from "@/types/SignUp/signUp.type"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

class SignUprepositoryImpl implements SignUprepositoryType {
  public async postSignUp(postSignUpPropsData: SignUpPropsType): Promise<void> {
    return await IDAcustomAxios.post("/member/signUp", postSignUpPropsData)
  }
}

export default new SignUprepositoryImpl()
