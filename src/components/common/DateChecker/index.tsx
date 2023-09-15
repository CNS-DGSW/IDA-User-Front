import type { ScheduleInfo } from "@/types/Schedule"
import * as S from "./style"
import { useSchedule } from "@/hooks/useSchedule"
import { useRecoilValue } from "recoil"
import { currentScheduleState } from "@/atom/scheduleAtom"

interface DateCheckerProps {
  schedule: ScheduleInfo
}

const DateChecker = ({ schedule }: DateCheckerProps) => {
  const currentScheuldeNavState = useRecoilValue(currentScheduleState)

  const { dDays, time, startTimeFormatted, endTimeFormatted } =
    useSchedule(schedule)
  if (currentScheuldeNavState !== schedule.title) {
    return null
  }

  return (
    <S.DateCheckerLayout>
      <S.DateCheckerDay>{`D-${dDays <= 0 ? "DAY" : dDays}`}</S.DateCheckerDay>
      <S.DateCheckerTime>{`${time}`}</S.DateCheckerTime>
      <S.DateCheckerDateBox>
        <S.DateCheckeStartDate>{startTimeFormatted}부터</S.DateCheckeStartDate>
        <S.DateCheckerEndDate>{endTimeFormatted}까지</S.DateCheckerEndDate>
        <S.DateCheckerDescription>
          {schedule.description}
        </S.DateCheckerDescription>
      </S.DateCheckerDateBox>
    </S.DateCheckerLayout>
  )
}

export default DateChecker
