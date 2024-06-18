import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

export interface ChangePasswordRepository {
  changePassword(email: string, password: string): Promise<void>
  sendEmailAuth(email: string): Promise<void>
}

class ChangePasswordRepositoryImpl implements ChangePasswordRepository {
  public async changePassword(email: string, password: string): Promise<void> {
    await IDAcustomAxios.post("/api/change-password", { email, password })
  }

  public async sendEmailAuth(email: string): Promise<void> {
    await IDAcustomAxios.post("/api/send-email-auth", { email })
  }
}

export default new ChangePasswordRepositoryImpl()
