import type { ScheduleInfo } from "@/types/Schedule"
import { calculateDday } from "@/util/calculateDday"
import { useEffect, useState } from "react"
import { formatDateTime } from "@/util/formatDateTime"
import { useInterval } from "./common/useInterval"

export const useSchedule = ({ name, date, date: { end } }: ScheduleInfo) => {
  const targetDateTime = end.date + "T" + end.time
  const { totalDays, totalTime } = calculateDday(targetDateTime)

  const [dDays, setDDays] = useState(totalDays)
  const [time, setTime] = useState(totalTime)

  const [fomated, setFomated] = useState({
    startTimeFormatted: "",
    endTimeFormatted: "",
  })

  useInterval(() => {
    const { totalDays, totalTime } = calculateDday(targetDateTime)
    setDDays(totalDays)
    setTime(totalTime)
  }, 1000)

  useEffect(() => {
    const { startTimeFormatted, endTimeFormatted } = formatDateTime(date)
    setFomated({ startTimeFormatted, endTimeFormatted })
  }, [])

  return {
    dDays,
    time,
    startTimeFormatted: fomated.startTimeFormatted,
    endTimeFormatted: fomated.endTimeFormatted,
  }
}
