import { typeAtom } from "@/atom/Apply/applyAtom"
import { useAtom } from "jotai"
import { useGetType, usePutType } from "./queries/useTypeQuery"

const useType = () => {
  const [userTypeInfo, setUserTypeInfo] = useAtom(typeAtom)

  const { isLoading, isError, data } = useGetType()

  const {
    data: putData,
    isLoading: putLoading,
    isError: putError,
    mutateAsync,
  } = usePutType(userTypeInfo.type)

  const fixTypeInfo = async () => {
    try {
      await mutateAsync(userTypeInfo.type)
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return {
    userTypeInfo,
    setUserTypeInfo,
    isLoading,
    isError,
    data,
    putData,
    putLoading,
    putError,
    fixTypeInfo,
  }
}

export default useType
