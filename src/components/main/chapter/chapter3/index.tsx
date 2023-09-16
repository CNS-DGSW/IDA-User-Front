import React from "react"
import HandlerBox from "./handlerbox"
import * as S from "./style"
import handlerInfo from "./handler"

const Chapter3 = () => {
  return (
    <S.Chapter3Layout>
      <div>
        <div>
          <p>대소고로 온나온나 온나...</p>
          <p>오라고,,,</p>
        </div>
        <button></button>
      </div>
      <S.ContentsLayoutCol className="layout">
        <S.HandlerWrapRow>
          {handlerInfo.map((e) => (
            <HandlerBox
              context={e.context}
              backgroundColor={e.backgroundColor}
            />
          ))}
        </S.HandlerWrapRow>
      </S.ContentsLayoutCol>
    </S.Chapter3Layout>
  )
}

export default Chapter3
