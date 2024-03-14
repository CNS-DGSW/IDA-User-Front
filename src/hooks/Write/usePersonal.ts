import { useRecoilState } from "recoil"
import { personalInfoAtom } from "@/atom/apply/applyAtom"
import {
  useGetPersonalInfo,
  usePutPersonalInfo,
} from "./queries/usePersonalQuery"

const usePersonal = () => {
  const [userInfo, setUserInfo] = useRecoilState(personalInfoAtom)

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
