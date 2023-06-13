import { useSetRecoilState } from "recoil"

import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import * as S from "./style"
import { isDarkNavbarState } from "@/atom/navBarAtom"

const Chapter2 = () => {
  const setDarkNavbarState = useSetRecoilState(isDarkNavbarState)

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    setDarkNavbarState(!isIntersecting)
  }

  const { setTarget } = useIntersectionObserver({ onIntersect })
  return (
    <S.Chapter2Layout ref={setTarget}>
      <div>
        <h1>asd</h1>
      </div>
    </S.Chapter2Layout>
  )
}

export default Chapter2
