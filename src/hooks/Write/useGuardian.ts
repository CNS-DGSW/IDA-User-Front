import { useAtom } from "jotai"
import { guardianInfo } from "@/atom/Apply/applyAtom"
import { useState, type MouseEvent } from "react"
import { type ParentInfo } from "@/types/Write/write"
import {
  useGetGuardianInfo,
  usePutGuardianInfo,
} from "./queries/useGuardianQuery"

const useGuardian = () => {
  const [parentInfo, setParentInfo] = useAtom(guardianInfo)
  const [modalState, setModalState] = useState<boolean>(false)

  const relationChangeHandler = (e: MouseEvent) => {
    const target = e.target as HTMLLIElement
    setParentInfo((prev) => ({
      ...prev,
      relation: target.textContent !== null ? target.textContent : "추가 안함",
    }))
  }

  const onCompletePost = (data: any) => {
    setModalState(false)
    setParentInfo((prev) => ({ ...prev, streetAddress: data.address }))
    setParentInfo((prev) => ({ ...prev, zipCode: data.zonecode }))
  }

  const { isLoading, isError, data } = useGetGuardianInfo()

  const {
    data: putData,
    isLoading: putLoading,
    isError: putError,
    mutateAsync,
  } = usePutGuardianInfo(parentInfo)

  const fixParentInfo = async () => {
    try {
      const cpInfo: ParentInfo = { ...parentInfo }
      cpInfo.zipCode = Number(cpInfo.zipCode)
      setParentInfo(cpInfo)
      await mutateAsync(cpInfo)
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return {
    parentInfo,
    setParentInfo,
    isLoading,
    isError,
    data,
    putData,
    putLoading,
    putError,
    fixParentInfo,
    relationChangeHandler,
    onCompletePost,
    modalState,
    setModalState,
  }
}

export default useGuardian
