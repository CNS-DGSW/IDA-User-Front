import { getPersonalInfo, putPersonalInfo } from "@/apis/personal"
import { PersonalInfo } from "@/types/Write/write"
import { AxiosError } from "axios"
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query"

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
