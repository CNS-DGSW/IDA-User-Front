import { getPhoto, putPhoto } from "@/apis/Write/idPhoto"
import { QUERY_KEYS } from "@/queries/queryKey"
import { type UseMutationResult, useMutation, useQuery } from "react-query"

export const useGetPersonalInfo = () =>
  useQuery(QUERY_KEYS.Write.getPhoto, getPhoto, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const usePutPersonalInfo = (updateInfo: FormData): UseMutationResult =>
  useMutation({ mutationFn: async () => await putPhoto(updateInfo) })
