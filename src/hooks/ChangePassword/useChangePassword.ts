// src/api/useChangePasswordQuery.ts
// import { ChangePasswordRepository } from "@/apis/ChangePassword/ChangePasswordRepositoryImpl"
import type { ChangePasswordFormData } from "@/components/ChangePassword/type"
import { type UseFormGetValues } from "react-hook-form"
import ChangePasswordRepositoryImpl from "@/apis/ChangePassword/ChangePasswordRepositoryImpl"

export const useChangePasswordQuery = () => {
  const repository = ChangePasswordRepositoryImpl
  const onsubmit = async (
    data: ChangePasswordFormData,
    isEmailAuth: boolean,
  ): Promise<void> => {
    if (!isEmailAuth) {
      alert("이메일 인증을 완료해주세요.")
    }
    try {
      await repository.changePassword(data.email, data.password)

      alert("비밀번호가 성공적으로 변경되었습니다.")
    } catch (error) {
      console.error("비밀번호 변경 중 에러 발생:", error)
      alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요.")
    }
  }

  const handleEmailAuth = async (
    getValues: UseFormGetValues<ChangePasswordFormData>,
    setIsEmailAuth: (value: boolean) => void,
  ): Promise<void> => {
    const email = getValues("email")
    if (!email) {
      alert("이메일을 입력해주세요.")
    }
    try {
      await repository.sendEmailAuth(email)
      setIsEmailAuth(true)
      alert("이메일 인증이 완료되었습니다.")
    } catch (error) {
      console.error("이메일 인증 중 에러 발생:", error)
      alert("이메일 인증에 실패했습니다. 다시 시도해주세요.")
    }
  }
  return {
    onsubmit,
    handleEmailAuth,
  }
}
export default useChangePasswordQuery
