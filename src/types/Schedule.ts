interface ScheduleDateDetailInfo {
  date: string
  time: string
}

export interface ScheduleDateInfo {
  start: ScheduleDateDetailInfo
  end: ScheduleDateDetailInfo
}

export interface ScheduleInfo {
  name: "원서 접수" | "1차 발표" | "2차 전형" | "최종발표"
  date: ScheduleDateInfo
  description: string
}
