type subjectKey = "subject" | "year" | "semester" | "score"

export type subjectInfo = Record<subjectKey, string>

interface subjectInfo3 {
  semester: string
  score: string
}
export interface subjectInfo2 {
  year: string
  info: subjectInfo3[]
}
