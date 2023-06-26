import { ScheduleDateInfo } from "@/types/Schedule"
import { useState } from "react"

export const useSchedule = (scheduleDate: ScheduleDateInfo) => {
  const [day, setDay] = useState("99")

  return { day }
}
