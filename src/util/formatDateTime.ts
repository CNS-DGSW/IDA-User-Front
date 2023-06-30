import type { ScheduleDateInfo } from "@/types/Schedule"

export const formatDateTime = ({ start, end }: ScheduleDateInfo) => {
  const koreanTime = [
    "한",
    "두",
    "세",
    "네",
    "다섯",
    "여섯",
    "일곱",
    "여덟",
    "아홉",
    "열",
    "열한",
    "열두",
  ]
  const startDateTime = new Date(start.date + "T" + start.time)
  const endDateTime = new Date(end.date + "T" + end.time)

  const startMonth = startDateTime.toLocaleString("default", { month: "long" })
  const startDay = startDateTime.getDate()
  const startHour = startDateTime.getHours()

  const endMonth = endDateTime.toLocaleString("default", { month: "long" })
  const endDay = endDateTime.getDate()
  let endHour = endDateTime.getHours()
  let meridiem = "오전"

  if (endHour >= 12) {
    meridiem = "오후"
    endHour -= 12
  }

  const startTimeFormatted = `${startMonth} ${startDay}일 ${startHour}시`
  const endTimeFormatted = `${endMonth} ${endDay}일 ${meridiem} ${
    koreanTime[endHour - 1]
  } 시`
  return {
    startTimeFormatted,
    endTimeFormatted,
  }
}
