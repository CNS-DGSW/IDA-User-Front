import type { SignInrepositoryType } from "@/types/Queries/SignIn/signIn.repositoryType"
import type { SignInPropsType, SignInResType } from "@/types/SignIn/signIn.type"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

class SignInrepositoryImpl implements SignInrepositoryType {
  public async postSignIn(
    postSignInPropsData: SignInPropsType,
  ): Promise<SignInResType> {
    return await IDAcustomAxios.post("/auth/signIn", postSignInPropsData)
  }
}

export default new SignInrepositoryImpl()
