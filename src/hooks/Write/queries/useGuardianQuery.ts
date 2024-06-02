import { getGuardianInfo, putGuardianInfo } from "@/apis/guardian"
import { QUERY_KEYS } from "@/queries/queryKey"
import { type ParentInfo } from "@/types/Write/write"
import { type UseMutationResult, useMutation, useQuery } from "react-query"

export const useGetGuardianInfo = () =>
  useQuery(QUERY_KEYS.Write.getGuardianInfo, getGuardianInfo, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutGuardianInfo = (updateInfo: ParentInfo): UseMutationResult =>
  useMutation({ mutationFn: async () => await putGuardianInfo(updateInfo) })
