interface IhandlerInfo {
  context: string
  backgroundColor: string
}
interface IContentsTitle {
  title: string
  context: string
}

const handlerInfo: IhandlerInfo[] = [
  {
    context: "DGSW 홈페이지 바로가기",
    backgroundColor: "#1485EE",
  },
  {
    context: "1차 합격 결과 확인하기",
    backgroundColor: "#8EC9FF",
  },
  {
    context: "최종 합격 결과 확인하기",
    backgroundColor: "#1E2F44",
  },
]

const ContentsTitleInfo: IContentsTitle[] = [
  {
    title: "원서 접수에 관련된 정보들이에요.",
    context: "원서 접수 전 꼼꼼히 다 읽어주세요.",
  },
  {
    title: "높은 취업률을 자랑하고 많은 지원을 학생들에게 해주고 있어요.",
    context:
      "우리 학교는 다른 마이스터고등학교와 비교했을 때 더 높은 취업률을 자랑하고, 더 많은 금액을 학생들에게 지원합니다.",
  },
]

const Inform: {
  handlerInfo: IhandlerInfo[]
  ContentsTitleInfo: IContentsTitle[]
} = {
  handlerInfo: handlerInfo,
  ContentsTitleInfo: ContentsTitleInfo,
}

export default Inform
