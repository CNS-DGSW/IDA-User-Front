import type {
  ChatBotwelcomeGreetingContentType,
  ChatBotBasicQuestionType,
} from "@/types/ChatBot/chatBot.type"

export const ChatBotDummyData = () => {
  const ChatBotwelcomeGreetingContentDummyData: ChatBotwelcomeGreetingContentType[] =
    [
      {
        id: 1,
        welcomeGreeting:
          "안녕하세요.\n대구소프트웨어마이스터고등학교\n신입생 입학안내 도우미 챗봇 Matda 입니다. 🤖",
      },
      {
        id: 2,
        welcomeGreeting:
          "👉 저 Matda는 사용자님께\n아래와 같은 정보를 제공해드릴 수 있습니다.\n\n- 입학원서접수\n- 신입생 구성현황/합격성적\n- 입학전형/시험방법/시험준비\n- 취업/대학/진로\n- 교육과정/학사일정\n- 학교생활 및 시설/기숙사\n- 학교특색프로그램",
      },
      {
        id: 3,
        welcomeGreeting:
          "👉 해당 종류의 질의사항을\n아래 입력란을 통해 저에게 질문해주세요~!",
      },
    ]

  const ChatBotBasicQuestionDummyData: ChatBotBasicQuestionType[] = [
    {
      id: 1,
      basicQuestion: "🧺  기숙사 내에 필요한 물품은?",
      basicQuestionText: "기숙사 내에 필요한 물품은?",
    },
    {
      id: 2,
      basicQuestion: "📄  주중 학생들의 하루 일과는?",
      basicQuestionText: "주중 학생들의 하루 일과는?",
    },
    {
      id: 3,
      basicQuestion: "📞  인터넷 및 전자 기기 사용은? ",
      basicQuestionText: "인터넷 및 전자 기기 사용은?",
    },
    {
      id: 4,
      basicQuestion: "☁️  기숙사 내 공용 시설 이용 규칙은?",
      basicQuestionText: "기숙사 내 공용 시설 이용 규칙은?",
    },
  ]

  return {
    ChatBotwelcomeGreetingContentDummyData,
    ChatBotBasicQuestionDummyData,
  }
}
