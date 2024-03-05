import Api from "../API"
import { useRecoilState } from "recoil"
import { personalInfoAtom } from "@/atom/apply/applyAtom"

const usePersonal = () => {
  const [userInfo, setUserInfo] = useRecoilState(personalInfoAtom)

  const getUserInfo = async () => {
    const response = await Api.get("/applicant/info")
    return response
  }

  const fixUserInfo = async () => {
    const response = await Api.put("/applicant/info", userInfo)
    return response
  }

  return { getUserInfo, fixUserInfo, userInfo, setUserInfo }
}

export default usePersonal
