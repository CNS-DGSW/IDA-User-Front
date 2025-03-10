import { personalInfoAtom } from "@/atom/Apply/applyAtom"
import {
  useGetPersonalInfo,
  usePutPersonalInfo,
} from "./queries/usePersonalQuery"
import { useAtom } from "jotai"

const usePersonal = () => {
  const [userInfo, setUserInfo] = useAtom(personalInfoAtom)

  const { isLoading, isError, data } = useGetPersonalInfo()

  const {
    data: putData,
    isLoading: putLoading,
    isError: putError,
    mutateAsync,
  } = usePutPersonalInfo(userInfo)

  const fixUserInfo = async () => {
    try {
      await mutateAsync(userInfo)
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return {
    userInfo,
    setUserInfo,
    isLoading,
    isError,
    data,
    putData,
    putLoading,
    putError,
    fixUserInfo,
  }
}

export default usePersonal
