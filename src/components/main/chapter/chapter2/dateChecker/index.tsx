import type { ScheduleInfo } from "@/types/Schedule"
import * as S from "./style"
import { useSchedule } from "@/hooks/useSchedule"

interface DateCheckerProps {
  schedule: ScheduleInfo
}

const DateChecker = ({ schedule }: DateCheckerProps) => {

  const { dDays,time,startTimeFormatted,endTimeFormatted } = useSchedule(schedule)

  return (
    <S.DateCheckerLayout>
      <S.DateCheckerDay>{`D-${dDays<=0?"DAY":dDays}`}</S.DateCheckerDay>
      <S.DateCheckerTime>{`${time}`}</S.DateCheckerTime>
      <S.DateCheckerDateBox>
        <S.DateCheckeStartDate>{startTimeFormatted}부터</S.DateCheckeStartDate>
        <S.DateCheckerEndDate>{endTimeFormatted}까지</S.DateCheckerEndDate>
      </S.DateCheckerDateBox>
      <S.DateCheckerDescription>
        {
          "서류는 반드시 원서접수 마감시간 이내에 학교로 도착해야 합니다.마감시간 이후 제출된 서류는 인정되지 않습니다."
        }
      </S.DateCheckerDescription>
    </S.DateCheckerLayout>
  )
}

export default DateChecker
