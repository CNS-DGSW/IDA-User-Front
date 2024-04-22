import type { SignInrepositoryType } from "@/types/Queries/SignIn/signin.repositoryType"
import type { SignInPropsType, SignInResType } from "@/types/SignIn/signIn.type"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

class SignInrepositoryImpl implements SignInrepositoryType {
  public async postSignIn(
    postPropsData: SignInPropsType,
  ): Promise<SignInResType> {
    return await IDAcustomAxios.post("/auth/signIn", postPropsData)
  }
}

export default new SignInrepositoryImpl()
