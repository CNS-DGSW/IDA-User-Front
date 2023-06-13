import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { useEffect } from "react"
import * as S from "./style"

const Chapter1 = () => {
  return (
    <S.Chapter1Layout>
      <S.Chapter1CenterBox>
        <S.Chapter1Phrases>
          세상을 이롭게 하는 소프트웨어 개발자가 되고 싶나요?
        </S.Chapter1Phrases>
        <S.Chapter1LinkButton href={"/aply"}>
          원서 점수하러 가기
        </S.Chapter1LinkButton>
        <S.Chapter1ArrowIcon />
      </S.Chapter1CenterBox>
    </S.Chapter1Layout>
  )
}

export default Chapter1
