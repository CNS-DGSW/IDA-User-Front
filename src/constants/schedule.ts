import type { ScheduleInfo } from "@/types/Schedule"

export const schedules: readonly ScheduleInfo[] = [
  {
    nmae: "원서 접수",
    date: {
      start: {
        year: 2022,
        month: 11,
        date: 20,
      },
      end: {
        year: 2022,
        month: 11,
        date: 23,
      },
    },
    description:
      "서류는 반드시 원서접수 마감시간 이내에 학교로 도착해야 합니다.마감시간 이후 제출된 서류는 인정되지 않습니다.",
  },
  {
    nmae: "1차 발표",
    date: {
      start: {
        year: 2022,
        month: 11,
        date: 20,
      },
      end: {
        year: 2022,
        month: 11,
        date: 20,
      },
    },
    description: "",
  },
  {
    nmae: "2차 전형",
    date: {
      start: {
        year: 2022,
        month: 11,
        date: 20,
      },
      end: {
        year: 2022,
        month: 11,
        date: 20,
      },
    },
    description: "",
  },
  {
    nmae: "최종발표",
    date: {
      start: {
        year: 2022,
        month: 11,
        date: 20,
      },
      end: {
        year: 2022,
        month: 11,
        date: 20,
      },
    },
    description: "",
  },
]
