import Api from "../API"
import { useRecoilState } from "recoil"
import { guardianInfo } from "@/atom/apply/applyAtom"
import { useState, type MouseEvent } from "react"
import { useMutation, useQuery } from "react-query"
import { type ParentInfo } from "@/atom/apply/types"

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

  const { isLoading, error, data } = useQuery({
    queryKey: ["parentData"],
    queryFn: async () => {
      const response = await Api.get("/applicant/parent")
      return response.data
    },
  })

  const mutation = useMutation({
    mutationFn: async (updateInfo: ParentInfo) => {
      const response = await Api.put("/applicant/parent", { ...updateInfo })
      return response.data
    },
  })

  const fixParentInfo = async () => {
    try {
      const cpInfo = { ...parentInfo }
      cpInfo.zipCode = Number(cpInfo.zipCode)
      await mutation.mutateAsync(cpInfo)
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return {
    parentInfo,
    setParentInfo,
    isLoading,
    error,
    data,
    fixParentInfo,
    relationChangeHandler,
    onCompletePost,
    modalState,
    setModalState,
  }
}

export default useGuardian
