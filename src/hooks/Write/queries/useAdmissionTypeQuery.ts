import {
  getAdmissionTypeInfo,
  putAdmissionTypeInfo,
} from "@/apis/admissionType"
import { QUERY_KEYS } from "@/queries/queryKey"
import { type AdmissionTypeInfo } from "@/types/Write/write"
import { type UseMutationResult, useMutation, useQuery } from "react-query"

export const useGetAdmissionTypeInfo = () =>
  useQuery(QUERY_KEYS.Write.getTypeInfo, getAdmissionTypeInfo, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutAdmissionTypeInfo = (
  updateInfo: AdmissionTypeInfo,
): UseMutationResult =>
  useMutation({
    mutationFn: async () => await putAdmissionTypeInfo(updateInfo),
  })
