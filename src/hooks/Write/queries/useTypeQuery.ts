import { getType, putType } from "@/apis/Write/type"
import { QUERY_KEYS } from "@/queries/queryKey"
import type { ApplyType } from "@/types/Write/write"
import { useMutation, useQuery } from "react-query"
import type { UseMutationResult } from "react-query"

export const useGetType = () =>
  useQuery(QUERY_KEYS.Write.getType, getType, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutType = (updateInfo: ApplyType): UseMutationResult =>
  useMutation({ mutationFn: async () => await putType(updateInfo) })
