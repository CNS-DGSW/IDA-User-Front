import { type ParentInfo } from "@/types/Write/write"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

export const getGuardianInfo = async () => {
  const response = await IDAcustomAxios.get("/applicant/parent")
  return response.data
}

export const putGuardianInfo = async (updateInfo: ParentInfo) => {
  const response = await IDAcustomAxios.put("/applicant/parent", {
    ...updateInfo,
  })
  return response.data
}
