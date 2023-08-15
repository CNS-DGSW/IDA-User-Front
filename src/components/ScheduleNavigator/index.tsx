import React from "react"
// import Image from "next/image"
import * as S from "./style"
import One from "../../assets/img/scheduleNavigator/1.svg"
import Two from "../../assets/img/scheduleNavigator/2.svg"
import Three from "../../assets/img/scheduleNavigator/3.svg"
import Four from "../../assets/img/scheduleNavigator/4.svg"
import Five from "../../assets/img/scheduleNavigator/5.svg"

const ScheduleNavigator = () => {
  const scheduleList = [
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
      title: "면접 ",
      image: <Four />,
    },
    {
      title: "최종발표",
      image: <Five />,
    },
  ]
  return (
    <S.ScheduleNavigatorLayout>
      {scheduleList.map(({ title, image }, index) => (
        <S.ScheduleItemBox key={index}>
          <S.ScheduleImageBox isSelected>{image}</S.ScheduleImageBox>
          {title}
        </S.ScheduleItemBox>
      ))}
    </S.ScheduleNavigatorLayout>
  )
}

export default ScheduleNavigator
