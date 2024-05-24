import type {
  getInformListResType,
  getInformResType,
} from "@/types/Inform/inform.type"
import type { InformrepositoryImplType } from "@/types/Queries/Inform/inform.repositoryType"
import { IDAcustomAxios } from "@/util/CustomAxios/customAxios"

class InformrepositoryImpl implements InformrepositoryImplType {
  // 게시글 가져오기
  public async getInform(id: string): Promise<getInformResType> {
    const { data } = await IDAcustomAxios.get(`/notice/${id}`)
    return data
  }

  // 게시글 리스트 가지고 오기
  public async getInformList(): Promise<getInformListResType[]> {
    const { data } = await IDAcustomAxios.get("/notice")
    const { notices } = data
    return notices
  }
}

export default new InformrepositoryImpl()
