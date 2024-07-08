import { type PersonalInfo } from "@/types/Write/write"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

export const getPersonalInfo = async () => {
  const response = await IDAcustomAxios.get("/applicant/info")
  return response.data
}

export const putPersonalInfo = async (updateInfo: PersonalInfo) => {
  const response = await IDAcustomAxios.put("/applicant/info", {
    ...updateInfo,
  })
  return response.data
}
