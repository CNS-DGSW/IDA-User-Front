import React from "react"
import HandlerBox from "./handlerbox"
import * as S from "./style"
import Inform from "./inform"
import ContentsTitle from "./contentsTitle"

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
          {Inform.handlerInfo.map((information, i) => (
            <HandlerBox
              key={i}
              context={information.context}
              backgroundColor={information.backgroundColor}
            />
          ))}
        </S.HandlerWrapRow>
      </S.ContentsLayoutCol>
      {Inform.ContentsTitleInfo.map((information, i) => (
        <ContentsTitle
          key={i}
          title={information.title}
          context={information.context}
        />
      ))}
    </S.Chapter3Layout>
  )
}

export default Chapter3
