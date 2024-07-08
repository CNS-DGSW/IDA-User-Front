import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

export const getPhoto = async () => {
  const { data } = await IDAcustomAxios.get("/applicant/photo")
  return data
}

export const putPhoto = async (formData: FormData) => {
  const response = await IDAcustomAxios.put("/applicant/photo", { ...formData })
  return response.data
}
