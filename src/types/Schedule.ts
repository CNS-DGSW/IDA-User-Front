export type ScheduleDateInfo = {
    start: {
        year:number,
        month:number,
        date:number
    }
    end: {
        year:number,
        month:number,
        date:number
    }
}

export interface ScheduleInfo  {
    nmae:"원서 접수"| "1차 발표" | "2차 전형" |"최종발표"
    date: ScheduleDateInfo
    description:string
}
