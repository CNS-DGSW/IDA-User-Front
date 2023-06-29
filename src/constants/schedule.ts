import type { ScheduleInfo } from "@/types/Schedule"

const cureentYear = new Date().getFullYear()
export const schedules: readonly ScheduleInfo[] = [
  {
    name: "원서 접수",
    date: {
      start: {
        date: `${cureentYear}-10-01`,
        time: "12:00:00",
      },
      end: {
        date: `${cureentYear}-06-29`,
        time: "15:00:00",
      },
    },
    description:
      "서류는 반드시 원서접수 마감시간 이내에 학교로 도착해야 합니다.마감시간 이후 제출된 서류는 인정되지 않습니다.",
  },
  {
    name: "1차 발표",
    date: {
      start: {
        date: `${cureentYear}-12-01`,
        time: "24:00:00",
      },
      end: {
        date: `${cureentYear}-12-01`,
        time: "24:00:00",
      },
    },
    description: "",
  },
  {
    name: "2차 전형",
    date: {
      start: {
        date: `${cureentYear}-12-01`,
        time: "24:00:00",
      },
      end: {
        date: `${cureentYear}-12-01`,
        time: "24:00:00",
      },
    },
    description: "",
  },
  {
    name: "최종발표",
    date: {
      start: {
        date: `${cureentYear}-12-01`,
        time: "24:00:00",
      },
      end: {
        date: `${cureentYear}-12-1`,
        time: "24:00:00",
      },
    },
    description: "",
  },
]
