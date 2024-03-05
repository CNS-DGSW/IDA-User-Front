import Api from "../API"
import { useRecoilState } from "recoil"
import { guardianInfo } from "@/atom/apply/applyAtom"

const useGuardian = () => {
  const [parentInfo, setParentInfo] = useRecoilState(guardianInfo)

  const getParentInfo = async () => {
    const response = await Api.get("/applicant/parent")
    return response
  }

  const fixParentInfo = async () => {
    const cpInfo = { ...parentInfo }
    cpInfo.zipCode = Number(cpInfo.zipCode)
    const response = await Api.put("/applicant/parent", { ...cpInfo })
    return response
  }

  return { parentInfo, setParentInfo, getParentInfo, fixParentInfo }
}

export default useGuardian
