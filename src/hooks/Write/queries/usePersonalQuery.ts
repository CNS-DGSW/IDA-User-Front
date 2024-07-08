import { getPersonalInfo, putPersonalInfo } from "@/apis/Write/personal"
import { QUERY_KEYS } from "@/queries/queryKey"
import { type PersonalInfo } from "@/types/Write/write"
import { type UseMutationResult, useMutation, useQuery } from "react-query"

export const useGetPersonalInfo = () =>
  useQuery(QUERY_KEYS.Write.getPersonalInfo, getPersonalInfo, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutPersonalInfo = (
  updateInfo: PersonalInfo,
): UseMutationResult =>
  useMutation({ mutationFn: async () => await putPersonalInfo(updateInfo) })
