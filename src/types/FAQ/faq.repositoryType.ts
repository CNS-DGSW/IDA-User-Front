import type { FAQListType } from "@/types/FAQ/faq.type"
import type { CommonIdParamType } from "../common.param"

export interface FAQrepositoryType {
  getFAQquestionList: () => Promise<FAQListType>
  getFAQanswerList: ({ id }: CommonIdParamType) => Promise<FAQListType>
}
