import { type UseQueryOptions, useQuery } from "react-query"
import FAQrepositoryImpl from "@/apis/FAQ/faq.repositoryImpl"
import { QUERY_KEYS } from "@/queries/queryKey"
import type { FAQListType } from "@/types/FAQ/faq.type"
import type { AxiosError } from "axios"
import type { CommonIdParamType } from "@/types/common.param"

export const useGetFAQquestionListQuery = (
  options?: Omit<
    UseQueryOptions<FAQListType, AxiosError, FAQListType, string>,
    "queryKey"
  >,
) => {
  return useQuery(
    QUERY_KEYS.FAQ.getFAQquestionList,
    FAQrepositoryImpl.getFAQquestionList,
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )
}

export const useGetFAQanswerListQuery = (
  { id }: CommonIdParamType,
  options?: Omit<
    UseQueryOptions<FAQListType, AxiosError, FAQListType, string[]>,
    "queryKey"
  >,
) => {
  return useQuery(
    QUERY_KEYS.FAQ.getFAQanswerList(id),
    async () => await FAQrepositoryImpl.getFAQanswerList({ id }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )
}

export const useFAQquery = () => {
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
