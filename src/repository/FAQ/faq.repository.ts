import type { FAQListType } from "@/types/FAQ/faq.type"
import type { CommonIdParam } from "../common.param"

export interface FAQrepository {
  getFAQquestionList: () => Promise<FAQListType>
  getFAQanswerList: ({ id }: CommonIdParam) => Promise<FAQListType>
}
