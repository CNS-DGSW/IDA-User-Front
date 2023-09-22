import React, { type Dispatch, type SetStateAction } from "react"
import * as S from "./style"

interface IPromptProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  setActive: Dispatch<SetStateAction<boolean>>
  addFunc: () => void
}

export const UsePrompt = ({
  value,
  setValue,
  setActive,
  addFunc,
}: IPromptProps) => {
  return (
    <S.MainLayout>
      <S.ContentsContainerCol>
        <div>
          <S.Title>과목 추가</S.Title>
          <div>
            <S.Context>과목 명을 입력해주세요.</S.Context>
            <S.Input
              type="text"
              placeholder="ex) 역사"
              value={value}
              onChange={(inputValue) => setValue(inputValue.target.value)}
            />
          </div>
          <S.ButtonWrapRow>
            <S.Button1 onClick={addFunc}>추가</S.Button1>
            <S.Button2 onClick={() => setActive(false)}>취소</S.Button2>
          </S.ButtonWrapRow>
        </div>
      </S.ContentsContainerCol>
    </S.MainLayout>
  )
}
