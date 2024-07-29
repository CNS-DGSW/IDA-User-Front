import { getPhoto, putPhoto } from "@/apis/Write/idPhoto"
import { QUERY_KEYS } from "@/queries/queryKey"
import { useMutation, useQuery } from "react-query"

export const useGetPhoto = () =>
  useQuery(QUERY_KEYS.Write.getPhoto, getPhoto, {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

export const useFixPhoto = (updateInfo: FormData) => {
  const mutation = useMutation({
    mutationFn: async () => await putPhoto(updateInfo),
  })

  const fixUserPhoto = async () => {
    try {
      await mutation.mutateAsync()
    } catch (error: any) {
      console.log("error!")
      console.log(error)
    }
  }

  return { fixUserPhoto }
}
