import { useSetRecoilState } from "recoil"

import { schedules } from "@/constants/schedule"
import useIntersectionObserver from "@/hooks/common/useIntersectionObserver"
import * as S from "./style"
// import DateChecker from "./dateChecker"
import { isDarkNavbarState } from "@/atom/navBarAtom"
import { useEffect } from "react"
// import { isDarkNavbarState } from "@/atom/navBarAtom"
import DateChecker from "../../../common/DateChecker"
import ScheduleNavigator from "@/components/ScheduleNavigator"

const Chapter2 = () => {
  const setDarkNavbarState = useSetRecoilState(isDarkNavbarState)
  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    setDarkNavbarState(!isIntersecting)
  }

  useEffect(() => {
    return () => {
      setDarkNavbarState(false)
    }
  }, [])

  const { setTarget } = useIntersectionObserver({ onIntersect })
  return (
    <S.Chapter2Layout ref={setTarget}>
      <S.ScheduleSection>
        <DateChecker schedule={schedules[0]} />
        <ScheduleNavigator />
      </S.ScheduleSection>
    </S.Chapter2Layout>
  )
}

export default Chapter2
