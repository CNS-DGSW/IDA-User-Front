import Api from "../API"
import { useRecoilState } from "recoil"
import { guardianInfo } from "@/atom/apply/applyAtom"
import { useState, type MouseEvent } from "react"

const useGuardian = () => {
  const [parentInfo, setParentInfo] = useRecoilState(guardianInfo)
  const [modalState, setModalState] = useState<boolean>(false)

  const relationChangeHandler = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement
    setParentInfo((prev) => {
      return {
        ...prev,
        relation:
          target.textContent !== null ? target.textContent : "추가 안함",
      }
    })
  }

  const onCompletePost = (data: any) => {
    setModalState(false)
    setParentInfo((prev) => {
      return { ...prev, streetAddress: data.address }
    })
    setParentInfo((prev) => {
      return { ...prev, zipCode: data.zonecode }
    })
  }

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

  return {
    parentInfo,
    setParentInfo,
    getParentInfo,
    fixParentInfo,
    relationChangeHandler,
    onCompletePost,
  }
}

export default useGuardian
