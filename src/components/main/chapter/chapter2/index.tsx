import { useSetRecoilState } from "recoil"
import { schedules } from "@/constants/schedule"
import useIntersectionObserver from "@/hooks/common/useIntersectionObserver"
import { isDarkNavbarState } from "@/atom/navBarAtom"
import { useEffect } from "react"
// import { isDarkNavbarState } from "@/atom/navBarAtom"
import DateChecker from "../../../common/DateChecker"
import ScheduleNavigator from "@/components/ScheduleNavigator"
import * as S from "./style"

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
      <S.ScheduleSectionRow>
        <S.ScheduleSection>
          {schedules.map((schedule) => {
            return <DateChecker key={schedule.title} schedule={schedule} />
          })}
        </S.ScheduleSection>
        <ScheduleNavigator />
      </S.ScheduleSectionRow>
    </S.Chapter2Layout>
  )
}

export default Chapter2
