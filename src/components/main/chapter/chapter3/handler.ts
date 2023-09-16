import HomeIcon from "@/assets/img/Icon/Home.svg"
import Notification from "@/assets/img/Icon/Notification.svg"
import MessageIcon from "@/assets/img/Icon/Message.svg"

interface IhandlerInfo {
  image: string
  context: string
  backgroundColor: string
}

const handlerInfo: IhandlerInfo[] = [
  {
    image: HomeIcon,
    context: "DGSW 홈페이지 바로가기",
    backgroundColor: "#1485EE",
  },
  {
    image: Notification,
    context: "1차 합격 결과 확인하기",
    backgroundColor: "#8EC9FF",
  },
  {
    image: MessageIcon,
    context: "최종 합격 결과 확인하기",
    backgroundColor: "#1E2F44",
  },
]

export default handlerInfo
