import { ApplyType } from "@/types/Write/write"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

export const getType = async () => {
    const response = await IDAcustomAxios.get("/admission/type")
    return response.data
}

export const putType = async (type: ApplyType) => {
    const response = await IDAcustomAxios.put("/admission/type", {
      type,
    })
    return response.data
  }
