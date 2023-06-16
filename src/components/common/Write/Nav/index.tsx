import React from "react"
import { usePageContext } from "../PageProvider"
import * as S from "./style"

const NavKind = [
  "지원자 정보",
  "보호자 정보",
  "사진 등록",
  "학교 정보",
  "전형 선택",
  "성적 계산",
  "자기소개서",
] as const

export const WriteNav = () => {
  const { currentPage, movePage } = usePageContext()

  return (
    <S.WriteNavStyle>
      {NavKind.map((v, idx) => (
        <S.Wrap colors={idx + 1 === currentPage}>
          {idx + 1 > 1 && <S.Line colors={idx + 1 <= currentPage} />}
          <S.Circle
            onClick={movePage}
            colors={idx + 1 <= currentPage}
            background={idx + 1 === currentPage}
          >
            {idx + 1}
          </S.Circle>
          <div>{v}</div>
        </S.Wrap>
      ))}
    </S.WriteNavStyle>
  )
}
