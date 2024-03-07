import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"
import type { FAQListType } from "@/types/FAQ/faq.type"
import type { CommonIdParam } from "../common.param"
import type { FAQrepository } from "./faq.repository"

class FAQrepositoryImpl implements FAQrepository {
  public async getFAQquestionList(): Promise<FAQListType> {
    const { data } = await IDAcustomAxios.get("/question")
    return data.notices
  }

  public async getFAQanswerList({ id }: CommonIdParam): Promise<FAQListType> {
    const { data } = await IDAcustomAxios.get(`/question/${id}`)
    return data
  }
}

export default new FAQrepositoryImpl()
