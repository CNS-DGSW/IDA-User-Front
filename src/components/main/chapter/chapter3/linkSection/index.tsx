import React from "react"
import * as S from "./style"
import MainBackground from "@/assets/mainBackground.svg"

const LinkSection = () => {
  return (
    <S.MainLayout>
      <S.BackgroundImage>
        <MainBackground />
      </S.BackgroundImage>
      <div>
        <S.ContextContentsBox>
          <p>대소고로 온나온나 온나...</p>
          <p>오라고,,,</p>
        </S.ContextContentsBox>
        <S.Chapter3LinkButton href={"/aply"}>
          원서 접수하러 가기 {">"}
        </S.Chapter3LinkButton>
      </div>
    </S.MainLayout>
  )
}

export default LinkSection
