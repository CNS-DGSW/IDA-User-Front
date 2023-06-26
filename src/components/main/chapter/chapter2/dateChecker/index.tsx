import React, { PropsWithChildren } from 'react'

import * as S from "./style"
import { useSchedule } from '@/hooks/useSchedule';
import { ScheduleInfo } from '@/types/Schedule';

interface DateCheckerProps {
    schedule:ScheduleInfo
}

const DateChecker = ({schedule}:DateCheckerProps) => {
    console.log(schedule);
    
    const {day}=useSchedule(schedule.date)
    console.log(day);
    
  return (
    <S.DateCheckerLayout>
      <S.DateCheckerDay>
          {`D-${day}`}
        </S.DateCheckerDay>
        <S.DateCheckerTime>
            {"23:45:12"}
        </S.DateCheckerTime>
        <S.DateCheckerDateBox>    
            <S.DateCheckeStartDate>
                10월 9일 오전 9시부터 
            </S.DateCheckeStartDate>
            <S.DateCheckerEndDate>
                10월 27일 오후 다섯시까지
            </S.DateCheckerEndDate>
        </S.DateCheckerDateBox>
        <S.DateCheckerDescription> 
        {"서류는 반드시 원서접수 마감시간 이내에 학교로 도착해야 합니다.마감시간 이후 제출된 서류는 인정되지 않습니다."}
        </S.DateCheckerDescription>
    </S.DateCheckerLayout>
  )
}

export default DateChecker