import type { ScheduleDateInfo } from "@/types/Schedule"
import { useState } from "react"

export const useSchedule = (scheduleDate: ScheduleDateInfo) => {
  const [day] = useState("99")

  return { day }
}
