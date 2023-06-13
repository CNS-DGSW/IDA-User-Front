import React, { useRef } from "react"

import Chapter1 from "./chapter/chapter1"
import Chapter2 from "./chapter/chapter2"
import * as S from "./style"

const Main = () => {
  return (
    <>
      <S.MainLayout>
        <Chapter1 />
        <Chapter2 />
      </S.MainLayout>
    </>
  )
}

export default Main
