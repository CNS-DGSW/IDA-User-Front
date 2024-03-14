import { getGuardianInfo, putGuardianInfo } from "@/apis/guardian"
import { type ParentInfo } from "@/types/Write/write"
import { type UseMutationResult, useMutation, useQuery } from "react-query"

export const useGetGuardianInfo = () =>
  useQuery("/applicant/info", getGuardianInfo, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutGuardianInfo = (updateInfo: ParentInfo): UseMutationResult =>
  useMutation({ mutationFn: async () => await putGuardianInfo(updateInfo) })
