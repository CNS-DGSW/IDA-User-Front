import {
  useGetFAQquestionListQuery,
  useGetFAQanswerListQuery,
} from "@/queries/FAQ/faq.query"

export const useFAQServerInteraction = () => {
  const {
    data: faqQuestionListData,
    isLoading: faqQuestionListIsLoading,
    isError: faqQuestionListIsError,
  } = useGetFAQquestionListQuery()

  const getFAQAnswerListDataById = (id: number) => {
    const {
      data: faqAnswerListData,
      isLoading: faqAnswerListIsLoading,
      isError: faqAnswerListIsError,
    } = useGetFAQanswerListQuery({ id: id.toString() })
    return {
      faqAnswerListData,
      faqAnswerListIsLoading,
      faqAnswerListIsError,
    }
  }

  return {
    faqQuestionListData,
    faqQuestionListIsLoading,
    faqQuestionListIsError,
    getFAQAnswerListDataById,
  }
}
