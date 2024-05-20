import informRepositoryImpl from "@/apis/Inform/inform.repositoryImpl"
import { QUERY_KEYS } from "@/queries/queryKey"
import { useQuery } from "react-query"

// 게시글 리스트 불러오기
export const getInformListQuery = () => {
    return useQuery(
        QUERY_KEYS.Inform.getInformList,
        informRepositoryImpl.getInformList,
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    )
}

// 게시글 내용 불러오기
export const getInformQuery = (id:string) => {
    return useQuery(
        QUERY_KEYS.Inform.getInform,
        async () => await informRepositoryImpl.getInform(id),
        {
            // id(문자열, string) 값이 공백("")이면 false, 아니면 true
            enabled : !!id
        }
    )
}

export const useInformQuery = () => {
    const {
        data : getInformListData
    } = getInformListQuery()

    const getInformById = (id:string) => {
        const {
            data : informGetData,
        } = getInformQuery(id)
        
        return {
            informGetData,
        }
    }

    return{
        getInformListData,

        getInformById
    }

}