import { schedules } from "@/constants/schedule"
import useIntersectionObserver from "@/hooks/common/useIntersectionObserver"
import { isDarkNavbarState } from "@/atom/navBarAtom"
import DateChecker from "../../../common/DateChecker"
import ScheduleNavigator from "@/components/ScheduleNavigator"
import { useEffect } from "react"
import { currentScheduleState } from "@/atom/scheduleAtom"
import * as S from "./style"
import ViewAll from "@/components/common/DateChecker/viewAll"
import { useAtomValue, useSetAtom } from "jotai"

const Chapter2 = () => {
  const currentScheuldeNavState = useAtomValue(currentScheduleState)
  const setDarkNavbarState = useSetAtom(isDarkNavbarState)
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
      <S.ScheduleSectionRow>
        <S.ScheduleSection>
          {schedules.map((schedule) => (
            <DateChecker key={schedule.title} schedule={schedule} />
          ))}
          {currentScheuldeNavState === "전체 보기" && <ViewAll />}
        </S.ScheduleSection>
        <ScheduleNavigator />
      </S.ScheduleSectionRow>
    </S.Chapter2Layout>
  )
}

export default Chapter2
