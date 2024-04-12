import { useRecoilState } from "recoil"

import * as S from "./style"
import One from "../../assets/img/scheduleNavigator/1.svg"
import Two from "../../assets/img/scheduleNavigator/2.svg"
import Three from "../../assets/img/scheduleNavigator/3.svg"
import Four from "../../assets/img/scheduleNavigator/4.svg"
import Five from "../../assets/img/scheduleNavigator/5.svg"
import { currentScheduleState } from "@/atom/scheduleAtom"
import type { ScheduleTitleKey } from "@/types/Schedule"

const ScheduleNavigator = () => {
  const [currentSchedule, setCurrentSchedule] =
    useRecoilState(currentScheduleState)

  const ScheduleNavBarList: Array<{
    title: ScheduleTitleKey | "전체 보기"
    image: any
  }> = [
    {
      title: "전체 보기",
      image: <One />,
    },
    {
      title: "원서 접수",
      image: <Two />,
    },
    {
      title: "1차 발표",
      image: <Three />,
    },
    {
      title: "면접",
      image: <Four />,
    },
    {
      title: "최종발표",
      image: <Five />,
    },
  ]

  const handdleClickSchedule = (title: string) => {
    setCurrentSchedule(title)
  }

  return (
    <S.ScheduleNavigatorLayout>
      {ScheduleNavBarList.map(({ title, image }, index) => {
        const isSelected = currentSchedule === title
        return (
          <S.ScheduleItemBox
            key={index}
            onClick={() => {
              handdleClickSchedule(title)
            }}
          >
            <S.ScheduleImageBox isSelected={isSelected}>
              {image}
            </S.ScheduleImageBox>
            {title}
          </S.ScheduleItemBox>
        )
      })}
    </S.ScheduleNavigatorLayout>
  )
}

export default ScheduleNavigator
