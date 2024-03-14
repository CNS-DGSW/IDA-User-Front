import { getPersonalInfo, putPersonalInfo } from "@/apis/personal"
import { type PersonalInfo } from "@/types/Write/write"
import { type UseMutationResult, useMutation, useQuery } from "react-query"

export const useGetPersonalInfo = () =>
  useQuery("/applicant/info", getPersonalInfo, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutPersonalInfo = (
  updateInfo: PersonalInfo,
): UseMutationResult =>
  useMutation({ mutationFn: () => putPersonalInfo(updateInfo) })
