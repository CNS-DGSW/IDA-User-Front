import type {
  getInformListResType,
  getInformResType,
} from "@/types/Inform/inform.type"

export interface InformrepositoryImplType {
  getInform: (id: string) => Promise<getInformResType>
  getInformList: () => Promise<getInformListResType[]>
}
