import Api from "../API"
import { useRecoilState } from "recoil"
import { personalInfoAtom } from "@/atom/apply/applyAtom"
import { useMutation, useQuery } from "react-query"
import { type PersonalInfo } from "@/atom/apply/types"

const usePersonal = () => {
  const [userInfo, setUserInfo] = useRecoilState(personalInfoAtom)

  const { isLoading, error, data } = useQuery({
    queryKey: ["personalData"],
    queryFn: async () => {
      const response = await Api.get("/applicant/info")
      return response.data
    },
  })

  const mutation = useMutation({
    mutationFn: async (updateInfo: PersonalInfo) => {
      const response = await Api.put("/applicant/info", { ...updateInfo })
      return response.data
    },
  })

  const fixUserInfo = async () => {
    try {
      await mutation.mutateAsync(userInfo)
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return {
    userInfo,
    setUserInfo,
    isLoading,
    error,
    data,
    fixUserInfo,
  }
}

export default usePersonal
