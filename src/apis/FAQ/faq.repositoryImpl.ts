import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"
import type { FAQListType } from "@/types/FAQ/faq.type"
import type { CommonIdParamType } from "../../types/common.param"
import type { FAQrepositoryType } from "../../types/FAQ/faq.repositoryType"

class FAQrepositoryImpl implements FAQrepositoryType {
  public async getFAQquestionList(): Promise<FAQListType> {
    const { data } = await IDAcustomAxios.get("/question")
    return data.notices
  }

  public async getFAQanswerList({
    id,
  }: CommonIdParamType): Promise<FAQListType> {
    const { data } = await IDAcustomAxios.get(`/question/${id}`)
    return data
  }
}

export default new FAQrepositoryImpl()
