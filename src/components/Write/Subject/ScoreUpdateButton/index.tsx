import React from "react"
import ReloadIcon from "@/assets/img/Icon/ReloadIcon.svg"
import { ScoreButton, ButtonWrap, ButtonContext } from "./style"

interface IScoreUpdate {
  onClick: () => void
}

const ScoreUpdateButton = ({ onClick }: IScoreUpdate) => {
  return (
    <ButtonWrap>
      <ScoreButton onClick={onClick}>
        <ReloadIcon />
        <ButtonContext>점수 갱신하기</ButtonContext>
      </ScoreButton>
    </ButtonWrap>
  )
}

export default ScoreUpdateButton
