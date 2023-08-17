export type ScheduleTitleKey = "원서 접수" | "1차 발표" | "면접" | "최종발표"

interface ScheduleDateDetailInfo {
  date: string
  time: string
}
export interface ScheduleDateInfo {
  start: ScheduleDateDetailInfo
  end: ScheduleDateDetailInfo
}

export interface ScheduleInfo {
  title: ScheduleTitleKey
  date: ScheduleDateInfo
  description: string
}
